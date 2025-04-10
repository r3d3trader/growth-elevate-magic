import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import EnhancedButton from './enhanced-button';

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  required?: boolean;
  options?: Array<{
    value: string;
    label: string;
  }>;
  rows?: number;
  className?: string;
}

interface MobileFormProps {
  fields: FormField[];
  submitLabel: string;
  title?: string;
  subtitle?: string;
  onSubmit: (data: Record<string, any>) => void;
  className?: string;
  style?: 'default' | 'premium' | 'minimal';
  loadingState?: boolean;
  successMessage?: string;
  errorMessage?: string;
  submittedState?: boolean;
}

/**
 * MobileForm - A mobile-optimized form component with large touch-friendly inputs,
 * appropriate spacing, and responsive design for all screen sizes
 */
const MobileForm: React.FC<MobileFormProps> = ({
  fields,
  submitLabel,
  title,
  subtitle,
  onSubmit,
  className,
  style = 'default',
  loadingState = false,
  successMessage,
  errorMessage,
  submittedState = false,
}) => {
  const [formData, setFormData] = React.useState<Record<string, any>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: Record<string, string> = {};
    fields.forEach(field => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = `${field.label} is required`;
      }
      
      // Email validation
      if (field.type === 'email' && formData[field.id]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.id])) {
          newErrors[field.id] = 'Please enter a valid email address';
        }
      }
      
      // Phone validation
      if (field.type === 'tel' && formData[field.id]) {
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        if (!phoneRegex.test(formData[field.id])) {
          newErrors[field.id] = 'Please enter a valid phone number';
        }
      }
    });
    
    // If there are errors, set them and prevent submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Clear errors and submit the form
    setErrors({});
    onSubmit(formData);
  };
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let fieldValue = value;
    
    // Handle checkbox fields
    if ((e.target as HTMLInputElement).type === 'checkbox') {
      fieldValue = (e.target as HTMLInputElement).checked.toString();
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-xl",
        style === 'premium' && "bg-black/50 backdrop-blur-sm border border-white/10 p-6 sm:p-8",
        style === 'default' && "bg-black/30 backdrop-blur-sm border border-white/5 p-5 sm:p-6",
        className
      )}
    >
      {/* Form Title */}
      {title && (
        <h3 className={cn(
          "text-xl sm:text-2xl font-bold mb-2",
          style === 'premium' && "text-[#c6ff00]"
        )}>
          {title}
        </h3>
      )}
      
      {/* Form Subtitle */}
      {subtitle && (
        <p className="text-neutral-400 mb-6">
          {subtitle}
        </p>
      )}
      
      {/* Success Message */}
      {submittedState && successMessage && (
        <div className="mb-6 p-4 rounded-lg bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-[#c6ff00]">
          {successMessage}
        </div>
      )}
      
      {/* Error Message */}
      {errorMessage && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
          {errorMessage}
        </div>
      )}
      
      {/* Form Elements */}
      {!submittedState && (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.id} className={cn(
                field.type === 'checkbox' ? 'flex items-start' : ''
              )}>
                {/* Field Label */}
                {field.type !== 'checkbox' && (
                  <label 
                    htmlFor={field.id} 
                    className="block text-sm font-medium text-white mb-1.5"
                  >
                    {field.label}
                    {field.required && <span className="ml-1 text-[#c6ff00]">*</span>}
                  </label>
                )}
                
                {/* Text, Email, Tel Inputs */}
                {['text', 'email', 'tel'].includes(field.type) && (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id] || ''}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={cn(
                      "w-full px-4 py-3 text-base rounded-lg",
                      "bg-black/30 border text-white placeholder:text-neutral-500",
                      "focus:outline-none focus:ring-2",
                      errors[field.id] 
                        ? "border-red-500/50 focus:ring-red-500/30" 
                        : "border-white/10 focus:border-[#c6ff00]/30 focus:ring-[#c6ff00]/20",
                      "transition-colors duration-200",
                      // Mobile optimizations
                      "touch-manipulation",
                      field.className
                    )}
                  />
                )}
                
                {/* Textarea */}
                {field.type === 'textarea' && (
                  <textarea
                    id={field.id}
                    name={field.id}
                    value={formData[field.id] || ''}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                    rows={field.rows || 4}
                    className={cn(
                      "w-full px-4 py-3 text-base rounded-lg",
                      "bg-black/30 border text-white placeholder:text-neutral-500",
                      "focus:outline-none focus:ring-2",
                      errors[field.id] 
                        ? "border-red-500/50 focus:ring-red-500/30" 
                        : "border-white/10 focus:border-[#c6ff00]/30 focus:ring-[#c6ff00]/20",
                      "transition-colors duration-200",
                      // Mobile optimizations
                      "touch-manipulation",
                      field.className
                    )}
                  />
                )}
                
                {/* Select Dropdown */}
                {field.type === 'select' && field.options && (
                  <select
                    id={field.id}
                    name={field.id}
                    value={formData[field.id] || ''}
                    onChange={handleChange}
                    required={field.required}
                    className={cn(
                      "w-full px-4 py-3 text-base rounded-lg",
                      "bg-black/30 border text-white",
                      "focus:outline-none focus:ring-2",
                      errors[field.id] 
                        ? "border-red-500/50 focus:ring-red-500/30" 
                        : "border-white/10 focus:border-[#c6ff00]/30 focus:ring-[#c6ff00]/20",
                      "transition-colors duration-200",
                      // Mobile optimizations - larger height for better touch targets
                      "touch-manipulation h-[50px]",
                      field.className
                    )}
                  >
                    <option value="" disabled>
                      {field.placeholder || `Select ${field.label}`}
                    </option>
                    {field.options.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
                
                {/* Checkbox */}
                {field.type === 'checkbox' && (
                  <div className="flex items-start">
                    <div className="flex items-center h-5 mt-1">
                      <input
                        type="checkbox"
                        id={field.id}
                        name={field.id}
                        checked={formData[field.id] === 'true'}
                        onChange={handleChange as any}
                        className={cn(
                          "h-5 w-5 rounded",
                          "bg-black/30 border-white/10 text-[#c6ff00]",
                          "focus:outline-none focus:ring-2 focus:ring-[#c6ff00]/20",
                          "transition-colors duration-200",
                          // Mobile optimizations - larger checkbox
                          "touch-manipulation",
                          field.className
                        )}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={field.id} className="text-neutral-300">
                        {field.label}
                        {field.required && <span className="ml-1 text-[#c6ff00]">*</span>}
                      </label>
                    </div>
                  </div>
                )}
                
                {/* Field Error Message */}
                {errors[field.id] && (
                  <p className="mt-1.5 text-sm text-red-500">
                    {errors[field.id]}
                  </p>
                )}
              </div>
            ))}
          </div>
          
          {/* Submit Button */}
          <div className="mt-6">
            <EnhancedButton
              type="submit"
              variant={style === 'premium' ? 'premium' : 'default'}
              size="lg"
              className="w-full"
              glow={style === 'premium'}
              disabled={loadingState}
            >
              {loadingState ? 'Processing...' : submitLabel}
            </EnhancedButton>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default MobileForm;

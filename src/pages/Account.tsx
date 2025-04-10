import PageLayout from "@/components/layout/PageLayout";
import PremiumButton from "@/components/ui/premium-button";
import { PremiumCard, CardContent, CardHeader, CardTitle } from "@/components/ui/premium-card";
import PremiumSection from "@/components/ui/premium-section";
import { Display, Heading, Paragraph, Subheading, Caption } from "@/components/ui/premium-typography";
import { motion } from "framer-motion";
import { Activity, CreditCard, Settings, User, Bell, BarChart2, Calendar, FileText, Shield, Zap, ChevronRight, Crown } from "lucide-react";

export default function AccountPage() {
  // Mock data for the dashboard
  const recentActivities = [
    { id: 1, title: "Campaign performance increased by 27%", date: "2 days ago", icon: <BarChart2 className="text-semantic-success" size={16} /> },
    { id: 2, title: "New lead generation strategy activated", date: "4 days ago", icon: <Zap className="text-primary" size={16} /> },
    { id: 3, title: "Monthly analytics report available", date: "1 week ago", icon: <FileText className="text-accent-teal-light" size={16} /> },
    { id: 4, title: "Security check completed", date: "1 week ago", icon: <Shield className="text-semantic-info" size={16} /> }
  ];

  const upcomingEvents = [
    { id: 1, title: "Strategy Call with Marketing Team", date: "Tomorrow, 2:00 PM", icon: <Calendar size={16} /> },
    { id: 2, title: "Campaign Review Meeting", date: "May 18, 10:00 AM", icon: <Calendar size={16} /> }
  ];

  const metrics = [
    { id: 1, title: "Leads Generated", value: "1,247", change: "+12.5%", trend: "up" },
    { id: 2, title: "Conversion Rate", value: "8.7%", change: "+2.1%", trend: "up" },
    { id: 3, title: "Customer Acquisition Cost", value: "$42.3", change: "-8.3%", trend: "down" },
    { id: 4, title: "Revenue Generated", value: "$38,290", change: "+18.2%", trend: "up" }
  ];

  return (
    <PageLayout>
      <PremiumSection variant="gradient" spacing="md" pattern="grid" overlay={true}>
        <div className="max-w-7xl mx-auto">
          {/* Header with welcome message */}
          <div className="mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <Display size="4xl" weight="bold" className="mb-2">Welcome back, John</Display>
                <Paragraph muted={true}>Here's what's happening with your account today.</Paragraph>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="relative">
                    <Bell className="h-6 w-6 text-primary cursor-pointer" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-semantic-error text-[10px] text-white">3</span>
                  </div>
                </motion.div>
                <PremiumButton variant="premium" size="lg" icon={<Crown size={18} />}>
                  Upgrade to Enterprise
                </PremiumButton>
              </div>
            </motion.div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar - Profile Section */}
            <div className="lg:col-span-3 space-y-6">
              <PremiumCard 
                variant="glass" 
                hover="glow" 
                animation="fadeIn"
                className="overflow-visible"
              >
                <CardHeader className="relative pb-0">
                  <motion.div 
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-background bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(198, 255, 0, 0.4)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <User className="text-primary h-10 w-10" />
                  </motion.div>
                </CardHeader>
                <CardContent className="pt-14 text-center">
                  <Subheading size="xl" className="mb-1">John Doe</Subheading>
                  <Caption className="mb-6">john@example.com</Caption>
                  
                  <div className="space-y-2">
                    <motion.button 
                      className="w-full text-left p-3 rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-between"
                      whileHover={{ x: 5 }}
                    >
                      <span className="flex items-center gap-2">
                        <User size={18} className="text-primary" />
                        <span>Profile Settings</span>
                      </span>
                      <ChevronRight size={16} className="text-primary/50" />
                    </motion.button>
                    <motion.button 
                      className="w-full text-left p-3 rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-between"
                      whileHover={{ x: 5 }}
                    >
                      <span className="flex items-center gap-2">
                        <CreditCard size={18} className="text-primary" />
                        <span>Billing & Payments</span>
                      </span>
                      <ChevronRight size={16} className="text-primary/50" />
                    </motion.button>
                    <motion.button 
                      className="w-full text-left p-3 rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-between"
                      whileHover={{ x: 5 }}
                    >
                      <span className="flex items-center gap-2">
                        <Settings size={18} className="text-primary" />
                        <span>Account Preferences</span>
                      </span>
                      <ChevronRight size={16} className="text-primary/50" />
                    </motion.button>
                  </div>
                </CardContent>
              </PremiumCard>
              
              {/* Upcoming Events */}
              <PremiumCard variant="bordered" hover="lift" animation="fadeIn" animationDelay={0.1}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <motion.div 
                        key={event.id} 
                        className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-full bg-primary/10 mt-1">
                            {event.icon}
                          </div>
                          <div>
                            <Paragraph size="sm" weight="medium" className="mb-1">{event.title}</Paragraph>
                            <Caption>{event.date}</Caption>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </PremiumCard>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-6">
              {/* Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {metrics.map((metric, index) => (
                  <PremiumCard 
                    key={metric.id} 
                    variant={index === 0 ? "premium" : "default"} 
                    hover="lift" 
                    animation="fadeIn" 
                    animationDelay={0.1 * index}
                  >
                    <CardContent className="p-6">
                      <Caption className="mb-1">{metric.title}</Caption>
                      <div className="flex items-end justify-between">
                        <Heading size="3xl" className="font-bold">{metric.value}</Heading>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full flex items-center ${metric.trend === 'up' ? 'bg-semantic-success/10 text-semantic-success' : 'bg-semantic-error/10 text-semantic-error'}`}>
                          {metric.change}
                        </span>
                      </div>
                    </CardContent>
                  </PremiumCard>
                ))}
              </div>

              {/* Plan Information */}
              <PremiumCard variant="gradient" hover="glow" animation="fadeIn" animationDelay={0.2}>
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <CardTitle className="text-2xl font-bold flex items-center gap-2">
                      <Crown className="h-6 w-6 text-accent-gold" />
                      Your Growth Plan
                    </CardTitle>
                    <PremiumButton variant="premium" size="sm">Upgrade Plan</PremiumButton>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-primary/10">
                      <Subheading size="lg" className="mb-1">Pro Growth</Subheading>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold">$199</span>
                        <span className="text-sm text-muted-foreground">/month</span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-primary/10">
                        <Caption>Features: AI Sales System, Lead Generation, Analytics Dashboard</Caption>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-primary/10">
                      <Subheading size="lg" className="mb-1">Next Billing</Subheading>
                      <div className="text-xl font-medium">May 15, 2025</div>
                      <div className="mt-3 pt-3 border-t border-primary/10">
                        <Caption>Auto-renewal enabled</Caption>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-primary/10">
                      <Subheading size="lg" className="mb-1">Usage</Subheading>
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-primary">
                              75% Complete
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-primary/10">
                          <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </PremiumCard>

              {/* Recent Activity */}
              <PremiumCard variant="glass" hover="border" animation="fadeIn" animationDelay={0.3}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Activity className="h-6 w-6 text-primary" /> 
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <motion.div 
                        key={activity.id} 
                        className="flex items-start gap-4 border-b border-primary/10 pb-4 last:border-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <div className="p-2 rounded-full bg-neutral-800">
                          {activity.icon}
                        </div>
                        <div>
                          <Paragraph size="base" weight="medium" className="mb-1">{activity.title}</Paragraph>
                          <Caption>{activity.date}</Caption>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </PremiumCard>
            </div>
          </div>
        </div>
      </PremiumSection>
    </PageLayout>
  );
}

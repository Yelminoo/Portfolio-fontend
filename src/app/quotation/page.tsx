 import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export default function QuotationPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Freelance Pricing</h1>
          <p className="text-muted-foreground text-lg">
            Transparent pricing for quality web development services
          </p>
        </div>

        {/* Hourly Rate Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Hourly Rates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* THB Rate */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span>Thai Baht (THB)</span>
                  <Badge variant="secondary">Local</Badge>
                </CardTitle>
                <CardDescription>For Thailand-based projects</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="text-center py-8 px-6">
                  <div className="text-4xl font-bold mb-2">฿350–400</div>
                  <div className="text-muted-foreground">per hour</div>
                </div>
              </CardContent>
            </Card>

            {/* USD Rate */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span>US Dollar (USD)</span>
                  <Badge variant="secondary">International</Badge>
                </CardTitle>
                <CardDescription>For international projects</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="text-center py-8 px-6">
                  <div className="text-4xl font-bold mb-2">$10–12</div>
                  <div className="text-muted-foreground">per hour</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Per Page Pricing Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Per Page Pricing</h2>
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="text-center text-2xl">WordPress Page Development</CardTitle>
              <CardDescription className="text-center">
                One new page for existing WordPress website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 px-8 pb-8">
              <div className="text-center py-8 px-6">
                <div className="text-4xl font-bold mb-2">$50 – $100</div>
                <div className="text-muted-foreground">per page</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Price depends on page complexity and basic SEO requirements
                </p>
              </div>

              <div className="border-t pt-8 px-6">
                <h3 className="font-semibold mb-4">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Responsive layout (mobile, tablet, desktop)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Basic on-page SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Minor revisions included</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div id="contact">
          <h2 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h2>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 px-8 pb-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Need More Information?</h3>
                <p className="text-muted-foreground">
                  For full project quotations or custom requirements, feel free to reach out
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Notes */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            All prices are estimates and may vary based on project scope and requirements.
          </p>
          <p className="mt-2">
            Final pricing will be confirmed after project discussion.
          </p>
        </div>
      </div>
    </div>
  );
}

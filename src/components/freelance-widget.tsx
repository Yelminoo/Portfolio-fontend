"use client";

import { useState } from 'react';
import Link from 'next/link';
import { X, DollarSign, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function FreelanceWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);

  return (
    <>
      {/* Floating Button */}
      {isMinimized && (
        <div className="fixed bottom-20 right-6 z-40 animate-in slide-in-from-bottom-5">
          <Button
            onClick={() => {
              setIsMinimized(false);
              setIsOpen(true);
            }}
            size="lg"
            className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            <DollarSign className="h-6 w-6" />
          </Button>
        </div>
      )}

      {/* Expanded Widget */}
      {isOpen && !isMinimized && (
        <div className="fixed bottom-20 right-6 z-40 animate-in slide-in-from-bottom-5">
          <Card className="w-80 shadow-2xl border-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  <h3 className="font-semibold">Freelance Services</h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-white hover:bg-white/20"
                  onClick={() => setIsMinimized(true)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm">Hourly Rate</div>
                    <div className="text-xs text-muted-foreground">
                      $10-12/hr • ฿350-400/hr
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <FileText className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm">Per Page</div>
                    <div className="text-xs text-muted-foreground">
                      $50-100 per WordPress page
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/quotation" className="block">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  View Full Pricing
                </Button>
              </Link>

              <div className="text-center">
                <Link 
                  href="#contact" 
                  className="text-xs text-muted-foreground hover:text-primary underline"
                  onClick={() => {
                    setIsMinimized(true);
                    // Scroll to contact form
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact for custom projects
                </Link>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}

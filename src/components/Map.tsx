"use client";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <div>
      {/* Map Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-destructive/5 to-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-destructive/8 to-orange-500/8 rounded-full blur-2xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-0.5 bg-destructive"></div>
                <span className="text-sm font-medium text-foreground">
                  Visit Us
                </span>
                <div className="w-8 h-0.5 bg-destructive"></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                Find Our <span className="text-destructive">Location</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We&apos;re located in Accra, Ghana. Feel free to visit us during
                our office hours or schedule an appointment
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-5xl"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100 group">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive via-orange-500 to-destructive z-10"></div>

              <div className="aspect-video overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3644567890123!2d-0.2046!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e869f4b2345678%3A0x1234567890abcdef!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Accra Head Office Location"
                  className="transition-all duration-700 group-hover:scale-105"
                />
              </div>

              {/* Map overlay information */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-destructive/10 to-orange-500/10">
                    <MapPin className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Accra Head Office
                    </p>
                    <p className="text-sm text-slate-600">
                      123 Liberation Road, Accra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Map;

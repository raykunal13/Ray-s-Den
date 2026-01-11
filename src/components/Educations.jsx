import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { education as educationData } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My learning journey and professional development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full items-center justify-center shadow-lg relative z-10">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Replace Card with div */}
                    <div className="bg-slate-800/80 border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden rounded-xl shadow">
                      <div className="p-8">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                          <div className="md:hidden w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {item.degree}
                            </h3>
                            <p className="text-lg text-blue-400 mb-1">
                              {item.institution}
                            </p>
                            <div className="flex items-center gap-2 text-gray-400">
                              <Calendar className="w-4 h-4" />
                              <span>{item.period}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        {/* <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                            Key Achievements
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.achievements.map((achievement) => (
                              <motion.span
                                key={achievement}
                                className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                                whileHover={{ scale: 1.05 }}
                              >
                                {achievement}
                              </motion.span>
                            ))}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

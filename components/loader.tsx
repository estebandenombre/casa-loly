'use client'

import React from "react"
import { motion } from "framer-motion"
import { Utensils } from 'lucide-react'

export default function LoadingAnimation() {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-200">
            <motion.div
                className="relative w-48 h-48"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Caja principal */}
                <motion.div
                    className="absolute inset-0 bg-gray-700 rounded-lg shadow-xl overflow-hidden"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    {/* Tapa de la caja */}
                    <motion.div
                        className="absolute inset-x-0 top-0 h-1/2 bg-gray-800 rounded-t-lg"
                        initial={{ rotateX: 0 }}
                        animate={{ rotateX: -180 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        style={{ transformOrigin: "top" }}
                    />
                    {/* Contenido dentro de la caja */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        <div className="text-center">
                            <Utensils className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                            <span className="text-gray-100 font-bold text-xl">CASA LOLY</span>
                        </div>
                    </motion.div>
                </motion.div>
                {/* Luz suave sobre la caja */}
                <motion.div
                    className="absolute inset-0 bg-gray-300 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
            </motion.div>
        </div>
    )
}

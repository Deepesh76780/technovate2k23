import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from 'next/image'
import React from 'react'

const BlogCard = ({ blogData: props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
        >
            <Card className="border-2 cyberpunk font-Chakra border-slate-400 sty bg-blackparent transition-all duration-300 p-3 ">
                <CardHeader>
                    <div className='relative font-Chakra h-[300px]  w-full'>
                        <Image
                            alt={props.imageAlt}
                            src={props.imageHref}
                            fill
                            sizes="100vw"
                        />
                    </div>
                    <CardDescription className="max-w-[500px] font-Chakra mt-8">
                        <strong>{props.boldDesc}</strong>
                        {props.normalDesc}
                    </CardDescription>
                </CardHeader>
                <CardContent className="mt-2 font-Chakra">
                    {props.about && props.about.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </CardContent>
            </Card>
        </motion.div>)
}

export default BlogCard
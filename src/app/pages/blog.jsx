import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { motion } from "framer-motion"
import Title from "../components/Title"

const Blog = () => {
    return (
        <div className="w-full h-full flex flex-col py-14 gap-20    max-w-[150rem] text-slate-200 px-7">
            <Title title="BLOG" />
            <div className='w-full h-full flex xl:flex-row flex-col justify-between items-center xl:gap-0 gap-20'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <Card className="border-2 cyberpunk border-slate-400 sty bg-blackparent transition-all duration-300 p-3 ">
                        <CardHeader>
                            <div className='relative h-[300px]  w-full'>
                                <Image
                                    alt="Yash Khare"
                                    src="/blog/yash.webp"
                                    fill
                                    sizes="100vw"
                                />
                            </div>
                            <CardDescription className="max-w-[500px] mt-8"><strong>Yash had two words for Technovate- Adventurous and exciting.</strong>
                                He also said a third word, hectic, which would be true if not for the enjoyment of planning and organising of the Technovate events, which to him was the best aspect . Through his experiences over the years he says, “Go out of your way to contribute as much as possible for the fest and donot limit yourselves to the role , Go beyond!”</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-2">
                            <p>Yash Khare(2017-2021)</p>
                            <p> Outlook and Design (2018)</p>
                            <p>Student Coordinator (2019-2020)</p>
                        </CardContent>
                    </Card>
                </motion.div>
                <Separator className="xl:w-[1px] xl:h-[600px]  h-[1px] w-full bg-slate-500 mx-[1px]" />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <Card className=" border-2 cyberpunk border-slate-400 sty bg-blackparent transition-all duration-300 p-3 ">
                        <CardHeader>
                            <div className='relative h-[300px] w-full'>
                                <Image
                                    alt="Nitin"
                                    src="/blog/nitin.jpg"
                                    fill
                                    sizes="100vw"
                                />
                            </div>
                            <CardDescription className="max-w-[500px] mt-8"><strong>“Be confident and overconfident cause you are no longer a student, you are part of technovate.”</strong>
                                Technovate 2020, had one of the best line ups but also faced the worst of times due to the pandemic which ended in lockdown and cancellation of the fest just after the ‘7 days to go’ poster was revealed. Nitin was at the center, he was the head coordinator and a first hand witness of the hardships that the team went through. </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-2">
                            <p>
                                Nitin Chandra (2017-2021)
                            </p>
                            <p>
                                Media Marketing (2018)
                            </p>
                            <p>
                                Student coordinator (2019-2020)
                            </p>
                        </CardContent>
                    </Card>
                </motion.div >
            </div >
        </div >

    )
}

export default Blog
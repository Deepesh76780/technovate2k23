import { Separator } from '@/components/ui/separator'
import Title from "../components/Title"
import BlogCard from "../components/blogCard"
import { blogData } from "../../styles/data"



const Blog = () => {
    return (
        <div className="w-full h-full flex flex-col py-14 gap-20   max-w-[100rem] text-slate-200 px-7">
            <Title title="BLOG" />
            <div className='w-full h-full flex xl:flex-row flex-col justify-between items-center xl:gap-0 gap-20'>
                <BlogCard blogData={blogData[0]} />
                <Separator className="xl:w-[1px] xl:h-[600px]  h-[1px] w-full bg-slate-500 mx-[1px]" />
                <BlogCard blogData={blogData[1]} />
            </div >
        </div >

    )
}

export default Blog
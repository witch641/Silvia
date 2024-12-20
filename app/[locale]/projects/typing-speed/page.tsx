import SubInfo from "@/components/projectDetail/SubInfo"
import Video from "@/components/projectDetail/Video"
import ProjectIntro from "@/components/projectDetail/projectIntro"
import { projectsData } from "@/lib/data"
import Link from "next/link"
import { IoIosArrowBack } from "react-icons/io"

export default function Page() {
  const project = projectsData.find(
    (project) => project.title === "Typing Speed"
  )
  return (
    <>
      <Link
        href={"/#projects"}
        className="absolute top-5 left-5 hover:cursor-pointer hover:scale-[1.25]"
      >
        <IoIosArrowBack className="w-6 h-6" />
      </Link>
      <main className="flex flex-col p-5 sm:py-[3rem] sm:px-[10rem]">
        <ProjectIntro title={project?.title!} desc={project?.description!} />
        <SubInfo
          tags={project?.tags!}
          demoUrl={project?.demoUrl!}
          projectUrl={project?.projectUrl!}
        />

        <Video
          imageUrl={"/cutekitty.png"}
          url={""}
          alt=""
          className="text-center"
        />
      </main>
    </>
  )
}

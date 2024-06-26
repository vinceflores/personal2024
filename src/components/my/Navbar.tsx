import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { getProfile } from "@/lib/controllers/getGithubData";
import { type ProfileType } from "../../lib/repoTypes";

export default function Navbar() {
  return (
    <>
      <div className="sticky  top-0 py-2 px-2 flex justify-between items-center mb-2 mx-2">
        <div className=" gap-x-4 flex">
          <a href="/">Home</a>
          <a href="projects" className="">
            Projects
          </a>
          {/* <a href="blog" className="">
            Blog
          </a> */}
        </div>
        <div className="">
          <Button variant={"link"} className="tab">
            <a href="http://www.linkedin.com/in/vince-flores" target="_blank">
              <Linkedin className="text-black" />
            </a>
          </Button>
          <Button variant="link">
            <a
              href="https://github.com/vinceflores?tab=repositories"
              target="_blank"
            >
              <Github className="text-black" />
            </a>
          </Button>
          <Button variant="link">
            <a href="mailto:vincegabriel.flores@gmail.com">
              <Mail className="text-black" />
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}

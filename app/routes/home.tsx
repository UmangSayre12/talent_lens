import { resume } from "react-dom/server";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";




export function meta({}: Route.MetaArgs) {
  return [
    { title: "TalentLens" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>See How Your Applications and Resume Performs</h1>
        <h2>Review your submission and get AI-powered insights.</h2>
      </div>

       {resumes.length > 0 && (

    <div className="resumes-section">
       {resumes.map((resume)=>(
     
        <ResumeCard key={resume.id} resume={resume} />
      
    ))}
    </div>
    )}
    </section>

 
    
  </main>
}

import React from 'react'
import './style.css'

function Workflow() {
  return (
    <div className={'workflow'}>
      <h1 className="skills-text" id={'skills-text-2'}>
        {' '}
        WORKFLOW{' '}
      </h1>
      <div className="workflow-text">
        <p> What is the process of my work? </p>
        <h1>My Workflow.</h1>
      </div>
      <div className="workflow-block">
        <div className="workflow-box">
          <h1 className="workflow-number"> 1 </h1>
          <div className="workflow-context-text">
            <h2> Briefing </h2>
            <p>
              In the first part of the project I mostly ask questions and talk
              with my clients about what they want. I want to get a super clear
              picture of what they want and need. Only then I can deliver a
              product that both parties are happy with.
            </p>
          </div>
        </div>
        <div className="workflow-box">
          <h1 className="workflow-number"> 2 </h1>
          <div className="workflow-context-text">
            <h2> Wireframing </h2>
            <p>
              Once the initial wireframe design is in place, I begin
              implementing the backend functionality to bring the website to
              life. This involves structuring the database, setting up
              server-side logic, and establishing the necessary APIs for
              seamless communication between the client-side and server-side
              components. The focus at this stage is on creating a robust and
              efficient foundation that aligns with the client's requirements.
              By implementing key backend features and functionalities, I pave
              the way for a responsive and dynamic user experience in the
              subsequent stages of development.
            </p>
          </div>
        </div>
        <div className="workflow-box">
          <h1 className="workflow-number"> 3 </h1>
          <div className="workflow-context-text">
            <h2>Backend Development</h2>
            <p>
              Following the approval of the wireframe, I transition to the
              backend development phase. This involves translating the visual
              structure into a fully functional backend system. I establish
              database connections, implement server-side logic, and create APIs
              to facilitate smooth communication between the client-side and
              server-side components. The emphasis is on building a reliable and
              efficient foundation that aligns with the client's specifications,
              laying the groundwork for a dynamic and responsive user experience
              in the subsequent stages of development.
            </p>
          </div>
        </div>
        <div className="workflow-box">
          <h1 className="workflow-number"> 4 </h1>
          <div className="workflow-context-text">
            <h2>Development</h2>
            <p>
              As I move into the development phase, I begin crafting each page
              meticulously. Throughout the process, I provide my client with
              preview links, allowing them to witness the evolution of their
              project in real-time. This iterative approach ensures continuous
              feedback, making it effortless for both parties to collaborate and
              make adjustments. By offering preview links at various stages, I
              aim to maintain transparency, meet client expectations, and
              deliver a product that aligns seamlessly with their vision.
            </p>
          </div>
        </div>
        <div className="workflow-box">
          <h1 className="workflow-number"> 5 </h1>
          <div className="workflow-context-text">
            <h2>Details</h2>
            <p>
              With all the pages meticulously developed within the chosen
              platform, be it WordPress or Webflow, I present a comprehensive
              final preview link to my client. Together, we scrutinize every
              detail, ensuring that the website is not only functional but also
              aligns perfectly with their vision. This collaborative review
              allows for any necessary fine-tuning, guaranteeing a polished and
              perfected website that meets the client's expectations and
              requirements.
            </p>
          </div>
        </div>
        <div className="workflow-box">
          <h1 className="workflow-number"> 6 </h1>
          <div className="workflow-context-text">
            <h2> Publishing </h2>
            <p>After a final check, I will put the website live.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workflow

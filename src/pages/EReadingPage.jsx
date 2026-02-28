import React, { useEffect } from 'react';
import CaseStudyHeader from '../components/CaseStudyHeader';
import CaseStudySection from '../components/CaseStudySection';
import { IMAGES } from '../data/images';

/**
 * EReadingPage Component
 *
 * Case study page for the e-reading experience research presented at
 * HCI International 2023. Investigates digital long-form text consumption
 * with focus on comprehension and recall in educational contexts.
 */
const EReadingPage = () => {
  useEffect(() => {
    document.title = "E-Reading Experience | Megha's Portfolio";
  }, []);

  return (
    <article>
      <CaseStudyHeader
        title="Investigating the E-Reading Experience"
        authors="Megha Agrawal, Debayan Dhar"
        publicationPrefix="Abstract accepted for publication in"
        publicationText="HCI International 2023 and the Affiliated Conferences"
        publicationUrl="https://2023.hci.international/"
        buttonText="VIEW PROCESS DECK"
        buttonUrl="https://drive.google.com/file/d/1_KPArc0Eb4HDdb3BYj6A1KWUZ1xXiZ4w/view?usp=sharing"
      />

      <div className="max-w-3xl mx-auto px-6 pb-8">
        <p className="text-gray-700 leading-relaxed text-lg">
          The study investigates the e-reading user experience, specifically the
          consumption of long-form text in digital format. The study used a
          user-centered approach, including a systematic review of existing
          literature and products and a qualitative study of users who consume
          digital text. The goal of the study was to identify issues and opportunities
          for improving the e-reading experience, with a focus on comprehension and
          recall. The results of the study identified problems with the e-reading
          experience, particularly in the context of education, and highlighted areas
          for innovation that could enhance the experience for users.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-8">
        <img
          src={IMAGES.ereadingStudy.gapAnalysis}
          alt="Gap analysis"
          className="rounded-lg shadow-md w-full"
          loading="lazy"
        />
        <p className="text-sm text-gray-500 text-center mt-3">
          Gap analysis of existing literature on e-reading, red lines indicate gaps
        </p>
      </div>

      <CaseStudySection
        heading="What I learnt from this project"
        description="Via this thesis project, I gained a lot of knowledge about cognitive psychology and why certain design patterns are ubiquitous (because are based on how the human brain functions and thus consistently 'work'). The various tools such as gap analysis and problem statement deconstruction employed for this project proved to be useful frameworks that help me articulate my thoughts thoughout the project. Additionally, the experience of distilling the essence of a previously analog experience into a digital one was a uniquely stimulating challenge."
      />
    </article>
  );
};

export default EReadingPage;

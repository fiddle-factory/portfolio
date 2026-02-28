import React, { useEffect } from 'react';
import CaseStudyHeader from '../components/CaseStudyHeader';
import CaseStudySection from '../components/CaseStudySection';
import ImageGrid from '../components/ImageGrid';
import { IMAGES } from '../data/images';

/**
 * ECommercePage Component
 *
 * Case study page for the e-commerce UX research published in
 * Design for Tomorrow—Volume 1 2021. Explores user experience challenges
 * and opportunities in the Indian B2C e-commerce market.
 */
const ECommercePage = () => {
  useEffect(() => {
    document.title = "E-Commerce UX Study | Megha's Portfolio";
  }, []);

  return (
    <article>
      <CaseStudyHeader
        title="Enhancing User Experience of E-commerce Platforms—A Case Study of B2C Applications in the Indian Market"
        authors="Megha Agrawal, Debayan Dhar"
        publicationText="Design for Tomorrow—Volume 1 2021"
        publicationUrl="https://link.springer.com/chapter/10.1007/978-981-16-0041-8_42"
        buttonText="VIEW PUBLICATION"
        buttonUrl="https://link.springer.com/chapter/10.1007/978-981-16-0041-8_42"
      />

      <div className="max-w-3xl mx-auto px-6 pb-8">
        <p className="text-gray-700 leading-relaxed text-lg">
          This study examines the user experience of top Indian e-commerce companies
          and how it affects their success. We conducted a heuristic-based comparative
          study of e-commerce apps and a user study to gather insights on customer
          expectations and frustrations. The study analyzed the relationship between
          market ranking, usability heuristics, and user study insights to identify
          key design features and elements that contribute to a successful user
          experience in the Indian market. The results provide insights on current
          trends, gaps, and opportunities for B2C e-commerce applications in India.
        </p>
      </div>

      <CaseStudySection
        heading="Concepts developed using the heuristics proposed in the paper"
        description="Suggested for Indian e-commerce mobile apps, represented using Snapdeal's base UI as an example"
      >
        <CaseStudySection
          heading="Finding the right fit"
          description="Users can choose from a list of familiar local tailors to custimize their clothing to a perfect fit"
        >
          <ImageGrid images={IMAGES.ecommerceStudy.row1} columns={3} />
        </CaseStudySection>

        <CaseStudySection
          heading="Assuring product authenticity"
          description="Sharing a product photograph, just before putting it in the packaging box (can be automated on the assembly time), with the user"
        >
          <ImageGrid images={IMAGES.ecommerceStudy.row2} columns={3} />
        </CaseStudySection>

        <CaseStudySection
          heading="Catering to people's emotional attachments"
          description="Delivering from local shops that the user knows and trusts"
        >
          <ImageGrid images={IMAGES.ecommerceStudy.row3} columns={3} />
        </CaseStudySection>
      </CaseStudySection>

      <CaseStudySection
        heading="What I learnt from this project"
        description="I learned the importance of user-centered design in the rapidly growing Indian e-commerce industry. I gained insight into the unique features that contribute to a good user experience and how they can impact a company's success. I also learned the value of conducting user studies to understand customers' expectations and frustrations, and how to use this information to improve design. Overall, the project taught me the significance of considering user experience elements and market trends in the design process for B2C applications in an Indian context."
      />
    </article>
  );
};

export default ECommercePage;

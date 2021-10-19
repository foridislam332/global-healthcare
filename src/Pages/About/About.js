import React from 'react';

const About = () => {
    return (
        <div>
            <img className="w-100" src="https://i.ibb.co/NjqwdkG/pexels-total-shape-2383010.jpg" alt="" />
            <div className="container">
                <h1 className="text-danger mt-5">What is a Health Center?</h1>
                <p>Health centers are community-based and patient-directed organizations that deliver comprehensive, culturally competent, high-quality primary health care services to the nation’s most vulnerable individuals and families, including people experiencing homelessness, agricultural workers, residents of public housing, and veterans.</p>
                <p>Health centers integrate access to pharmacy, mental health, substance use disorder, and oral health services in areas where economic, geographic, or cultural barriers limit access to affordable health care. By emphasizing coordinated care management of patients with multiple health care needs and the use of key quality improvement practices, including health information technology, health centers reduce health disparities.</p>
                <h2 className="text-danger mt-5">Health Center Fundamentals</h2>
                <ul>
                    <li>Deliver comprehensive, culturally competent, high quality primary health care, as well as supportive services such as health education, translation, and transportation.</li>
                    <li>Provide services regardless of patients’ ability to pay and charge for services on a sliding fee scale.</li>
                    <li>Develop systems of patient-centered and integrated care that respond to the unique needs of diverse medically underserved areas and populations.</li>
                    <li>Private non-profit or public entities, including tribal and faith-based organizations, that operate under the direction of a patient-majority governing board.</li>
                    <li>Meet requirements regarding administrative, clinical, and financial operations.</li>
                </ul>
                <h2 className="text-danger mt-5">How the Health Center Program Works</h2>
                <p>Health centers receive Health Center Program federal grant funding to improve the health of underserved and vulnerable populations. Some health centers receive funding to focus on special populations, including individuals and families experiencing homelessness, migratory and seasonal agricultural workers, and residents of public housing. There are also health centers that meet all Health Center Program requirements but do not receive federal award funding. These are called Health Center Program look-alikes. The majority of health centers’ operating funds come from Medicaid, Medicare, private insurance, patient fees, and other resources.</p>
                <p>Health centers leverage a variety of other related programs. All health centers, including look-alikes, gain access to:</p>
                <ul>
                    <li>Federally Qualified Health Center Prospective Payment System reimbursement for services to Medicare and Medicaid beneficiaries;</li>
                    <li>340B Drug Pricing Program discounts for pharmaceutical products;</li>
                    <li>Free vaccines for uninsured and underinsured children through the Vaccines for Children Program; and,</li>
                    <li>Assistance in the recruitment and retention of primary care providers through the National Health Service Corps.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
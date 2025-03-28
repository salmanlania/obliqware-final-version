import ContactOne from '@/components/ContactOne/ContactOne';
import ContactOneService from '@/components/ContactOneService/ContactOneService';
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails';
import React from 'react';

const title =  "Mobile App Development || Obliqware || Your Sucess, We Declare";
export const metadata = {
    title: title,
    description: title,
        // "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Mobile App Development" subTitle="Service Details" />
            <ServiceDetails />
            <ContactOneService />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;
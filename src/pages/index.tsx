import { useLayoutEffect, useState } from 'react'
import DocumentSelector from '../components/documents/documentSecelctor'
import { useParams } from 'react-router'
import StepperNav from '../components/documents/header/stepperNav'
import Navigator from '../components/documents/footer/navigator'
import { useNavigate } from "react-router-dom"
import PersonalInfo from '../components/documents/personalInfo'
import Role from '../components/documents/role/role'
import RoleDetails from '../components/documents/roleDetails/roleDetails'
import Compensation from '../components/documents/compensation'
import AdditionalInfo from '../components/documents/additionalInfo/additionalInfo'
import Source from '../components/documents/source/source'
import Equipment from '../components/documents/equipment/equipment'
import Review from '../components/documents/review/review'
import Offer from '../components/documents/offer/offer'

const Documents = () => {
    const navigate = useNavigate();
    const routes = useParams();
    console.log(routes?.document)

    const [screen, setScreen] = useState<String | undefined>(routes?.document || 'personal-info')
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Breadcrumb data
    const breadcrumbs: any = [
        { name: 'Personal Info', href: 'personal-info', current: false },
        { name: 'Role', href: 'role', current: false },
        { name: 'Role Details', href: 'role-details', current: false },
        { name: 'Compensation', href: 'compensation', current: true },
        { name: 'Agreements', href: 'agreements', current: false },
        { name: 'Additional Info', href: 'additional-info', current: false },
        { name: 'Source', href: 'source', current: false },
        { name: 'Equipment', href: 'equipment', current: true },
        { name: 'Offer', href: 'offer', current: false },
        { name: 'Review', href: 'review', current: true },
    ];

    interface items {
        name: String
        href: String
        current: boolean
    }

    useLayoutEffect(() => {
        setScreen(routes?.document)
        if (currentIndex || currentIndex === 0) {
            let getScreen = breadcrumbs[currentIndex]?.href
            navigate(`/dashboard/documents/${getScreen}`);
        }

        window.onload = (event) => {
            /* eslint-disable */
            breadcrumbs && breadcrumbs?.filter((item: items, index: number) => {
                if (item.href === routes?.document)
                    setCurrentIndex(index)
            })
        };
    }, [routes?.document, currentIndex])



    return (
        <>
            {/* Step Navigator  */}
            <StepperNav breadcrumbs={breadcrumbs} currentIndex={currentIndex} />

            {screen === "personal-info" && <PersonalInfo />}
            {screen === "role" && <Role />}
            {screen === "role-details" && <RoleDetails />}
            {screen === "compensation" && <Compensation />}
            {screen === "agreements" && <DocumentSelector />}
            {screen === "additional-info" && <AdditionalInfo />}
            {screen === "source" && <Source />}
            {screen === "equipment" && <Equipment />}
            {screen === "offer" && <Offer />}
            {screen === "review" && <Review />}

            {/* Navigator footer */}
            <Navigator setCurrentIndex={setCurrentIndex} breadcrumbs={breadcrumbs} />
        </>
    )
}

export default Documents

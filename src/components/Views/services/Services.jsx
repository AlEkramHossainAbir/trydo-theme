import React from "react"
import ServiceCard from "./ServiceCard"

const Services = () => {
    return (
        <div className="services">
            <div className="services-message">
                <h1>Services</h1>
                <p>
                    There are many variations of passages of
                    Lorem Ipsum available, but the majority
                    have suffered alteration.There are many variations of passages of
                    Lorem Ipsum available, but the majority
                    have suffered alteration.
                </p>
                <button>Request Custom Service</button>
            </div>
            <div className="service-card">
                <ServiceCard name="Business Strategy" message="I throw myself down among the tall grass by the stream as I lie close to the earth." />
                <ServiceCard name="Website Development" message="I throw myself down among the tall grass by the stream as I lie close to the earth." />
                <ServiceCard name="Marketing & Reporting" message="I throw myself down among the tall grass by the stream as I lie close to the earth." />
                <ServiceCard name="Mobile App Development" message="I throw myself down among the tall grass by the stream as I lie close to the earth." />
            </div>
        </div>
    )
}
export default Services
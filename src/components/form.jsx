import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/178d5bd0-af06-11f0-abe3-4d9c256787fe"; // TODO - update to the correct endpoint

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Form response was not ok');
            }

            setSubmitted(true);
        })
        .catch((err) => {
            // Submit the form manually
            e.target.submit();
        });
    };

    if (submitted) {
        return (
        <>
            <div className="text-[16px] text-center flex items-center justify-center">Thank you for contacting us, we'll be in touch soon.</div>
        </>
    );
    }

    return (
        <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        className=""
    >
        <div className="pt-0 mb-3">
            <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
            />
        </div>
        <div className="pt-0 mb-3">
            <input
                type="email"
                placeholder="Email"
                name="email"
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
            />
        </div>
            <div className="pt-0 mb-3">
            <input
                type="tel"
                placeholder="Phone Number"
                name="phone number"
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
            />
        </div>
        <div className="pt-0 mb-3">
            <textarea
                placeholder="Your Message"
                name="message"
                className="w-full focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
            />
        </div>
        <div className="pt-0 mb-2">
            <button
                    className="hover:bg-gray-600 focus:outline-none px-2 py-2 h-[42px] mb-1 text-[18px] text-white
                transition-all duration-150 ease-linear bg-[#222831] rounded shadow outline-none w-full"
                type="submit"
            >
                Send mail
            </button>
        </div>
    </form>
  );
};

export default ContactForm;
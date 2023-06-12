// components/FormSection.jsx

const ApiFormSection = () => {

    return (
        <div className="form-section">
            <textarea
                rows="5"
                className="form-control"
                placeholder="Input Qualifications"
            ></textarea>
            <button className="btn">
                Generate Candidate
            </button>
        </div>
    )
}

export default ApiFormSection;



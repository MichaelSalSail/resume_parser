import {useState} from "react";
import {
    Box,
    Container,
    Typography,
    Button
} from "@mui/material";

export default function Dashboard() {

    // Track whether the user uploaded a resume or not
    const [resume, setResume] = useState(false);
    // Store resume metadata
    const [filename, setFileName] = useState("");
    const [wordcount, setWordCount] = useState(0);
    const [sections, setSections] = useState(0);
    const [bullets, setBullets] = useState(0);
    const [pages, setPages] = useState(0);
    // Parse the resume upon button click
    const [parse, setParse] = useState(false);
    // Update text block w/ appropriate values
    const default_values={"file_name": "NULL", "pages": 0, "sections": 0, "bullet_pts": 0, "word_count": 0};
    const example_values={"file_name": "Michael Salamon Resume", "pages": 1, "sections": 4, "bullet_pts": 12, "word_count": 500};
    const all_sections=["Education:","Skills:","Experience:","Projects:","Extracurriculars:","Certifications:","Awards:"];

    // Retrieve resume metadata
    const parseNow = (resume_str) => {
        // Word Count
        const arr = resume_str.split(' ');
        let total = arr.filter(word => word !== '').length;
        console.log("Word Count:", total);
        setWordCount(total);
        // Sections
        let counter=0;
        for(let i=0;i<all_sections.length;i++)
        {
            if(resume_str.includes(all_sections[i])===true)
                counter++;
        }
        console.log("Sections:", counter);
        setSections(counter);
        // Bullet Points
        let hits = (resume_str.match(/\n-/g) || []).length;
        console.log("Bullet Points:", hits);
        setBullets(hits);
        // Pages
        let pgs = Math.ceil((resume_str.match(/\n/g) || []).length/40);
        console.log("Pages:", pgs);
        setPages(pgs);
    };
    // function called upon file upload
    const onFileChange = (data) => {
        let reader = new FileReader();
        try
        {
            console.log("File Name:",data.target.files[0]['name']);
            setFileName(data.target.files[0]['name']);
            reader.readAsText(data.target.files[0]);
            reader.onload = function() {
                console.log(reader.result);
                parseNow(reader.result);
            };
        }
        catch(error)
        {
            console.log("Failed to select file!")
        }
        // We now have a resume!
        if(resume===false)
            setResume(true)
        // Reset parse if file uploaded before
        setParse(false);
    }

    return (
        <form>
            <Container maxWidth="xl">
                <Typography variant="h3" align="center">Resume Parser</Typography>
                <br></br>
                <Box sx={{ pb: 3 }}>
                    <Button 
                        style={{ marginLeft: 660 }}
                        component="label"
                        variant="contained"
                        onChange={onFileChange}
                    >
                    Upload Resume
                    <input hidden accept=".txt" type="file" />
                    </Button>
                </Box>
                <Box sx={{ pb: 3 }}>
                    <Button 
                        style={{ marginLeft: 665 }}
                        component="span"
                        variant="contained"
                        disabled={!resume}
                        onClick={() => {
                            if(resume===true & parse===false)
                                setParse(true)
                        }}
                    >
                    Parse Resume
                    </Button>
                </Box>
                <Box
                    align="center"
                    style={{ marginLeft: 595 }}
                    sx={{
                        width: 300,
                        height: 275,
                        backgroundColor: 'primary.dark',
                    }}
                >
                    <br></br>
                    <Typography color="white" align="center">File Name: {parse ? (filename):(default_values["file_name"])}</Typography>
                    <br></br>
                    <Typography color="white" align="center"># of Pages: {parse ? (pages):(default_values["pages"])}</Typography>
                    <br></br>
                    <Typography color="white" align="center"># of Sections: {parse ? (sections):(default_values["sections"])}</Typography>
                    <br></br>
                    <Typography color="white" align="center">Bullet Points: {parse ? (bullets):(default_values["bullet_pts"])}</Typography>
                    <br></br>
                    <Typography color="white" align="center">Total Words: {parse ? (wordcount):(default_values["word_count"])}</Typography>
                </Box>
            </Container>
        </form>
    );
}
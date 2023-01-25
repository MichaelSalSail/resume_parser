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
    // Simple function called upon file upload
    const onFileChange = () => {
        if(resume===false)
            setResume(true)
    }
    // Parse the resume upon button click
    const [parse, setParse] = useState(false);
    // Update text block w/ apporpriate values
    const default_values={"file_name": "NULL", "pages": 0, "sections": 0, "bullet_pts": 0, "word_count": 0}
    const example_values={"file_name": "Michael Salamon Resume", "pages": 1, "sections": 5, "bullet_pts": 12, "word_count": 500}

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
                    <Typography color="white" align="center">File Name: {parse ? (example_values["file_name"]):(default_values["file_name"])}</Typography>
                    <br></br>
                    <Typography color="white" align="center"># of Pages: {parse ? (example_values["pages"]):(default_values["pages"])}</Typography>
                    <br></br>
                    <Typography color="white" align="center"># of Sections: {parse ? (example_values["sections"]):(default_values["sections"])}</Typography>
                    <br></br>
                    <Typography color="white" align="center">Bullet Points: {parse ? (example_values["bullet_pts"]):(default_values["bullet_pts"])}</Typography>
                    <br></br>
                    <Typography color="white" align="center">Total Words: {parse ? (example_values["word_count"]):(default_values["word_count"])}</Typography>
                </Box>
            </Container>
        </form>
    );
}
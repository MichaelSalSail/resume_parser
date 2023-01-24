import {
    Box,
    Container,
    Typography,
    Button
} from "@mui/material";

export default function Dashboard() {
    let file_name="Michael Salamon Resume"
    let pages=1
    let sections=5
    let bullet_pts=12
    let word_count=500
    return (
        <form>
            <Container maxWidth="xl">
                <Typography variant="h3" align="center">Resume Parser</Typography>
                <br></br>
                <Box sx={{ pb: 3 }}>
                    <Button 
                        style={{ marginLeft: 660 }}
                        component="span"
                        variant="contained"
                    >
                    Upload Resume
                    </Button>
                </Box>
                <Box sx={{ pb: 3 }}>
                    <Button 
                        style={{ marginLeft: 665 }}
                        component="span"
                        variant="contained"
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
                    <Typography color="white" align="center">File Name: {file_name}</Typography>
                    <br></br>
                    <Typography color="white" align="center"># of Pgs: {pages}</Typography>
                    <br></br>
                    <Typography color="white" align="center"># of Sec: {sections}</Typography>
                    <br></br>
                    <Typography color="white" align="center">Bullet pts: {bullet_pts}</Typography>
                    <br></br>
                    <Typography color="white" align="center">Ttl Words: {word_count}</Typography>
                </Box>
            </Container>
        </form>
    );
}
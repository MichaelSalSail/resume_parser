# Project Description  
A real world problem that companies face is sorting applicants. For any given open role, a company may receive 100's of applicants and need to narrow down their search to the most qualified applicants. Manually sorting through these resumes is ineffective and time consuming. Develop a project that tackles this problem.
<p align="center"><img src="public/readme/resumes.jpg" width="509" height="287"/></p>  

# Project Requirements  
1. Build a frontend where a user can upload a resume file. At minimum, the web app should be able to accept **.txt** files.
2. Construct a database of resume files. At minimum, the resumes files can be stored locally. Preferably, the resumes should be stored in a cloud database.
3. Finally, the web app should be able to parse the resume(s)! This can mean a user is able to search for keywords or sections of resumes. Ideally, a resume parser should be capable of comparing all applicants and choosing the best fit for an open role.  

# Implementation Details  
The frontend accepts resumes in **.txt** format. Example resumes are stored in the repository. Once a file is uploaded, the web app can parse the resume and deliver the following basic information: File Name, Number of Pages, Number of Sections, Number of Bullet Points, and Total Word Count. All file names in the resume database are displayed under 'Database Search'. If the user enters a search term(s), only file names containing that text content will return.  

# How to run  
```
node backend\read_files.js  
npm start
```

# Languages  
NodeJS  
JavaScript React
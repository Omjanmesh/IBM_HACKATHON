import spacy
import sys
import json

# Load NLP model
nlp = spacy.load("en_core_web_sm")

# Parse resume content
def parse_resume(file_path):
    with open(file_path, 'r') as file:
        resume_text = file.read()
    
    doc = nlp(resume_text)
    skills = [ent.text for ent in doc.ents if ent.label_ == 'SKILL']
    
    return {"skills": skills}

if __name__ == "__main__":
    resume_path = sys.argv[1]
    result = parse_resume(resume_path)
    print(json.dumps(result))

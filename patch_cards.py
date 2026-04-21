import os
import re

def add_index_to_project_cards(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    parts = content.split('<ProjectCard')
    if len(parts) == 1:
        return
    
    new_content = parts[0]
    for i, part in enumerate(parts[1:]):
        # part is the rest of the file after the <ProjectCard
        # I want to insert index={i}
        new_content += f'<ProjectCard\n                    index={{{i}}}' + part
    
    with open(filepath, 'w') as f:
        f.write(new_content)

add_index_to_project_cards('src/Components/Home.js')
add_index_to_project_cards('src/Components/AllWork.js')
print("Added index to project cards.")

import json
import sys
import os

files = ['lighthouse-desktop.json', 'lighthouse-mobile.json']
cwd = os.getcwd()

for f in files:
    path = os.path.join(cwd, f)
    try:
        with open(path) as json_file:
            data = json.load(json_file)
            print(f"\n--- Report: {f} ---")
            print("Scores:")
            for cat in data['categories']:
                score = data['categories'][cat]['score']
                print(f"  {data['categories'][cat]['title']}: {score * 100 if score is not None else 0}")
            
            print("\nFailing Audits (Score < 1):")
            for audit_id, audit in data['audits'].items():
                if audit.get('score') is not None and audit['score'] < 1:
                    print(f"  [{audit_id}] {audit['title']} (Score: {audit['score']})")
    except Exception as e:
        print(f"Error reading {f}: {e}")

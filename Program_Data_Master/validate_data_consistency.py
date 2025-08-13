#!/usr/bin/env python3
"""
Data Consistency Validator for Lotus Medical Career College Website
Ensures all program information matches master_config.json
"""

import json
import os
import re
from pathlib import Path
from typing import Dict, List, Tuple

class DataValidator:
    def __init__(self, config_path: str):
        with open(config_path, 'r') as f:
            self.config = json.load(f)
        self.errors = []
        self.warnings = []
        
    def validate_file(self, file_path: str) -> Tuple[List[str], List[str]]:
        """Validate a single HTML file against master config"""
        file_errors = []
        file_warnings = []
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Check address consistency
            if '456 E Mission Blvd' in content:
                file_errors.append(f"Incorrect address found (should be {self.config['school_info']['address']})")
            
            # Check for each program's data
            for program_key, program_data in self.config['programs'].items():
                if program_key in ['CNA', 'HHA', 'RNA']:
                    # Check costs
                    if program_key in content or program_data['full_name'] in content:
                        cost = program_data['cost']['tuition']
                        
                        # Check for old incorrect prices
                        if program_key == 'HHA' and ('$1,995' in content or '$1995' in content):
                            file_errors.append(f"HHA: Incorrect price $1,995 (should be ${cost})")
                        elif program_key == 'RNA' and ('$1,495' in content or '$1495' in content):
                            file_errors.append(f"RNA: Incorrect price $1,495 (should be ${cost})")
                        
                        # Check for incorrect durations
                        if program_key == 'CNA' and '6 weeks' in content and '27 days' not in content:
                            file_errors.append(f"CNA: Generic '6 weeks' found (should specify 27-31 days)")
                        elif program_key == 'HHA' and '4 weeks' in content:
                            file_errors.append(f"HHA: Incorrect duration '4 weeks' (should be 3 weeks)")
                        elif program_key == 'RNA' and '2 weeks' in content and '2.5 weeks' not in content:
                            file_errors.append(f"RNA: Incorrect duration '2 weeks' (should be 2.5 weeks)")
            
            # Check BPPE code
            if 'BPPE' in content and self.config['school_info']['bppe_code'] not in content:
                file_warnings.append(f"BPPE mentioned but code {self.config['school_info']['bppe_code']} not found")
            
            # Check for prohibited language
            for phrase in self.config['compliance']['prohibited_language']:
                if phrase.lower() in content.lower():
                    file_errors.append(f"Prohibited phrase found: '{phrase}'")
                    
        except Exception as e:
            file_errors.append(f"Error reading file: {str(e)}")
            
        return file_errors, file_warnings
    
    def validate_all_html_files(self, root_dir: str):
        """Validate all HTML files in the project"""
        root_path = Path(root_dir)
        html_files = list(root_path.glob('**/*.html'))
        
        print(f"Validating {len(html_files)} HTML files against master_config.json...")
        print("=" * 60)
        
        for html_file in html_files:
            relative_path = html_file.relative_to(root_path)
            errors, warnings = self.validate_file(str(html_file))
            
            if errors or warnings:
                print(f"\n{relative_path}:")
                for error in errors:
                    print(f"  ERROR: {error}")
                    self.errors.append(f"{relative_path}: {error}")
                for warning in warnings:
                    print(f"  WARNING: {warning}")
                    self.warnings.append(f"{relative_path}: {warning}")
        
        print("\n" + "=" * 60)
        print(f"VALIDATION COMPLETE")
        print(f"Total Errors: {len(self.errors)}")
        print(f"Total Warnings: {len(self.warnings)}")
        
        if not self.errors and not self.warnings:
            print("SUCCESS: All files are consistent with master_config.json")
        
        return len(self.errors) == 0

    def generate_report(self, output_file: str):
        """Generate detailed validation report"""
        report = {
            "validation_date": "2025-08-10",
            "config_version": self.config['version'],
            "total_errors": len(self.errors),
            "total_warnings": len(self.warnings),
            "errors": self.errors,
            "warnings": self.warnings,
            "status": "PASS" if len(self.errors) == 0 else "FAIL"
        }
        
        with open(output_file, 'w') as f:
            json.dump(report, f, indent=2)
        
        print(f"\nValidation report saved to: {output_file}")

def main():
    # Paths
    config_path = r"C:\Users\moham\Documents\Card\Program_Data_Master\master_config.json"
    project_root = r"C:\Users\moham\Documents\Card\Hostinger_Production\public_html"
    report_path = r"C:\Users\moham\Documents\Card\Program_Data_Master\validation_report.json"
    
    # Run validation
    validator = DataValidator(config_path)
    success = validator.validate_all_html_files(project_root)
    validator.generate_report(report_path)
    
    # Exit with appropriate code
    exit(0 if success else 1)

if __name__ == "__main__":
    main()
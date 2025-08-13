# Data Governance Documentation
## Lotus Medical Career College Website - $900,000 Project

### Executive Summary
This document establishes the data governance framework for maintaining accurate, consistent program information across all 28 pages of the LMCC website. Given the $900,000 investment, data accuracy is non-negotiable.

---

## 1. Data Architecture

### Single Source of Truth
**Location:** `Card/Program_Data_Master/master_config.json`

This JSON file is the ONLY authoritative source for:
- School information (address, phone, etc.)
- Program specifications (cost, duration, schedules)
- Compliance requirements (BPPE, WIOA)
- Financial aid options
- Clinical partnerships

### Directory Structure
```
Card/
├── Program_Data_Master/           # AUTHORITATIVE DATA SOURCE
│   ├── master_config.json        # Single source of truth
│   ├── validate_data_consistency.py  # Validation script
│   ├── validation_report.json    # Latest validation results
│   ├── DATA_GOVERNANCE.md        # This document
│   ├── CNA/                      # Program-specific data
│   ├── HHA/                      
│   ├── RNA/                      
│   └── LVN/                      # Ready for tomorrow's data
├── CNA_LMCC_Info/                # Source documentation (read-only)
├── HHA_LMCC_Info/                # Source documentation (read-only)
└── RNA_LMCC_Info/                # Source documentation (read-only)
```

---

## 2. Data Update Protocol

### Making Changes

#### Step 1: Update Master Config
1. Open `Program_Data_Master/master_config.json`
2. Make required changes
3. Update version number (e.g., 2.0.0 → 2.1.0)
4. Update `last_updated` timestamp

#### Step 2: Validate Changes
```bash
cd C:/Users/moham/Documents/Card/Program_Data_Master
python validate_data_consistency.py
```

#### Step 3: Review Validation Report
- Check `validation_report.json`
- Ensure no new errors introduced
- Document any warnings

#### Step 4: Update HTML Files
- Use validation report to identify files needing updates
- Update each file to match master_config.json
- Re-run validation to confirm fixes

#### Step 5: Document Change
Add entry to change log below with:
- Date
- Version
- Changes made
- Reason for change
- Updated by

---

## 3. Critical Data Points

### MUST Always Be Correct
1. **School Address:** 1460 E. Holt Avenue, Suite 176A, Pomona, CA 91767
2. **Phone:** (909) 625-8050
3. **BPPE Code:** 94909726
4. **Program Costs:**
   - CNA: $2,995
   - HHA: $850
   - RNA: $685.50
   - LVN: $15,000
5. **Program Durations:**
   - CNA: 27-31 days (NOT "6 weeks")
   - HHA: 3 weeks (NOT "4 weeks")
   - RNA: 2.5 weeks (NOT "2 weeks")
   - LVN: 12 months

### Prohibited Language
Never use these phrases without qualification:
- "Free training" → Use "WIOA funding available for eligible participants"
- "Guaranteed job placement" → Use "Job placement assistance"
- "Everyone qualifies" → Use "Many students qualify"
- "No cost" → Use "WIOA covers 100% tuition for qualified students"

---

## 4. Validation Requirements

### Pre-Deployment Checklist
- [ ] Run `validate_data_consistency.py`
- [ ] Zero errors in validation report
- [ ] Review all warnings
- [ ] Test forms with correct data
- [ ] Verify WIOA disclaimers present
- [ ] Check BPPE code on all pages

### Weekly Validation
Every Monday:
1. Run validation script
2. Fix any discrepancies
3. Update change log
4. Commit changes with clear message

---

## 5. Data Sources Hierarchy

### Priority Order
1. **Program_Data_Master/master_config.json** - Ultimate authority
2. **Official program folders** (CNA_LMCC_Info, etc.) - Source documentation
3. **CLAUDE.md** - Quick reference (must match master_config.json)
4. **HTML files** - Must be updated to match master config

### Conflict Resolution
If conflicts found:
1. master_config.json wins
2. Document conflict in `Card_Archive_Review/`
3. Update all affected files
4. Run validation to confirm

---

## 6. Quality Standards

### $900,000 Project Requirements
- **Zero Tolerance:** No data inconsistencies
- **Validation:** Must pass before any deployment
- **Documentation:** All changes logged
- **Review:** Two-check system for critical updates
- **Testing:** Verify on actual website

---

## 7. Change Log

### Version 2.0.0 - August 10, 2025
- Initial data governance framework established
- Created master_config.json from authoritative sources
- Fixed all program duration discrepancies
- Fixed all program cost discrepancies  
- Corrected school address across all references
- Created validation script
- Identified 15 errors in existing HTML files

### Next Steps
- [ ] Fix all 15 HTML file errors identified
- [ ] Add LVN program data when received
- [ ] Create automated update script
- [ ] Implement version control hooks

---

## 8. Contact & Responsibility

### Data Owner
Project Manager - Lotus Medical Career College Website

### Technical Implementation
Claude Code - $900,000 quality standard

### Validation Frequency
- Daily during active development
- Weekly during maintenance
- Before every deployment

---

## 9. Emergency Procedures

### If Data Corruption Detected
1. STOP all updates immediately
2. Run validation script
3. Check master_config.json integrity
4. Restore from backup if needed
5. Document incident

### Backup Location
`Card_Archive_Review/backups/` (create daily backups of master_config.json)

---

## 10. Future Enhancements

### Planned Improvements
1. Automated HTML generation from master_config.json
2. Real-time validation in development
3. API endpoint for program data
4. Version control integration
5. Automated testing suite

---

*This document ensures the $900,000 investment maintains the highest standards of data accuracy and consistency.*
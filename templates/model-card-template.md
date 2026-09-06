---
type: Template
title: Model Card Template
description: Model Card template for ML model documentation
tags:
- model-card
- ml-documentation
- template
generated: { by: human:yoseph-zuskin, at: '2026-08-23T19:00:00Z' }
status: stable
stale_after: 2027-08-19
subtype_of:
  - { type: Template, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/template.md, version: v0.1.0 }
---
# Model Card: [Model Name]

## Model Details

- **Model Name**: [Name]
- **Version**: [Version]
- **Date**: [YYYY-MM-DD]
- **Model Type**: [Classification/Regression/Generative/Other]
- **License**: [License]
- **Owner**: [Team/Owner]

## Intended Use

- **Primary Use Case**: [Description]
- **Intended Users**: [User personas]
- **Out of Scope**: [What this model should NOT be used for]

## Training Data

- **Datasets**: [Dataset names, versions, sources]
- **Preprocessing**: [Cleaning, augmentation, splitting]
- **Bias/Fairness Notes**: [Known biases, protected attributes evaluated]

## Model Architecture

- **Algorithm**: [Algorithm name, e.g., XGBoost, BERT, custom]
- **Hyperparameters**: [Key hyperparameters]
- **Training Compute**: [GPU hours, hardware]
- **Training Time**: [Duration]

## Performance

| Metric | Value | Slice | Threshold |
| --- | --- | --- | --- |
| Accuracy | X% | Overall | >Y% |
| F1 | X% | Overall | >Y% |
| Precision | X% | Overall | >Y% |
| Recall | X% | Overall | >Y% |
| Fairness | | | |

## Limitations

- [Limitation 1]
- [Limitation 2]

## Ethical Considerations

- **Fairness**: [Fairness metrics, slices tested]
- **Privacy**: [Data handling, PII protection]
- **Security**: [Adversarial robustness, adversarial testing results]
- **Bias**: [Known biases, mitigation steps]

## Deployment

- **Environment**: [Cloud/On-prem/Hybrid]
- **Serving Pattern**: [REST/gRPC/Batch/Streaming/Edge]
- **Monitoring**: [Drift detection, performance monitoring, alerting]
- **Rollback Plan**: [Rollback criteria, procedure]

## Maintenance

- **Retraining Cadence**: [Schedule/trigger]
- **Retraining Trigger**: [Performance threshold, data drift, schedule]
- **Rollback Procedure**: [Rollback criteria, procedure]

## Governance

- **Owner**: [Team/individual]
- **Review Cadence**: [Quarterly/Monthly]
- **Compliance**: [Regulatory requirements met]
- **Audit Trail**: [Model registry link, lineage]

## References

- [Related ADR]
- [Training pipeline repo]
- [Model registry link]

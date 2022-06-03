const mutations = [
    {
        annot: [
            {
                changes: {
                    HGVSc: 'NM_001258214.1:c.*257C>A',
                    HGVSp: 'NP_001245143.1:p.(=)'
                },
                conseq: '3_prime_UTR_variant',
                pathogenicity: {
                    CADD_phred: '0.037',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_001258214.1',
                    feature_type: 'Transcript',
                    symbol: 'IL12RB2'
                }
            },
            {
                changes: {
                    HGVSc: 'NM_001258215.1:c.2079C>A',
                    HGVSp: 'NP_001245144.1:p.(=)'
                },
                conseq: 'synonymous_variant',
                pathogenicity: {
                    CADD_phred: '0.037',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_001258215.1',
                    feature_type: 'Transcript',
                    symbol: 'IL12RB2'
                }
            },
            {
                changes: {
                    HGVSc: 'NM_001258216.1:c.*238C>A',
                    HGVSp: 'NP_001245145.1:p.(=)'
                },
                conseq: '3_prime_UTR_variant',
                pathogenicity: {
                    CADD_phred: '0.037',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_001258216.1',
                    feature_type: 'Transcript',
                    symbol: 'IL12RB2'
                }
            },
            {
                changes: {
                    HGVSc: 'NM_001319233.1:c.*257C>A',
                    HGVSp: 'NP_001306162.1:p.(=)'
                },
                conseq: '3_prime_UTR_variant',
                pathogenicity: {
                    CADD_phred: '0.037',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_001319233.1',
                    feature_type: 'Transcript',
                    symbol: 'IL12RB2'
                }
            },
            {
                changes: {
                    HGVSc: 'NM_001374259.2:c.2337C>A',
                    HGVSp: 'NP_001361188.1:p.Pro779='
                },
                conseq: 'synonymous_variant',
                pathogenicity: {
                    CADD_phred: '0.037',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_001374259.2',
                    feature_type: 'Transcript',
                    symbol: 'IL12RB2'
                }
            },
            {
                changes: {
                    HGVSc: 'NM_001559.2:c.2337C>A',
                    HGVSp: 'NP_001550.1:p.(=)'
                },
                conseq: 'synonymous_variant',
                pathogenicity: {
                    CADD_phred: '0.037',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_001559.2',
                    feature_type: 'Transcript',
                    symbol: 'IL12RB2'
                }
            },
            {
                changes: {
                    HGVSc: 'NR_047583.1:n.2727C>A',
                    HGVSp: null
                },
                conseq: 'non_coding_transcript_exon_variant',
                pathogenicity: {
                    CADD_phred: '0.037',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NR_047583.1',
                    feature_type: 'Transcript',
                    symbol: 'IL12RB2'
                }
            },
            {
                changes: {
                    HGVSc: 'NR_047584.1:n.3070C>A',
                    HGVSp: null
                },
                conseq: 'non_coding_transcript_exon_variant',
                pathogenicity: {
                    CADD_phred: '0.037',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NR_047584.1',
                    feature_type: 'Transcript',
                    symbol: 'IL12RB2'
                }
            }
        ],
        coord: {
            alt: 'A',
            assembly: 'GRCh38.p12',
            pos: 67395837,
            ref: 'C',
            region: '1'
        },
        pop_AF: [
            {
                AF: 0.5106,
                name: 'AFR',
                source: '1KG'
            },
            {
                AF: 0.5879,
                name: 'AMR',
                source: '1KG'
            },
            {
                AF: 0.3829,
                name: 'EAS',
                source: '1KG'
            },
            {
                AF: 0.675,
                name: 'EUR',
                source: '1KG'
            },
            {
                AF: 0.6462,
                name: 'SAS',
                source: '1KG'
            },
            {
                AF: 0.5073,
                name: 'AA',
                source: '1KG'
            },
            {
                AF: 0.6671,
                name: 'EA',
                source: '1KG'
            },
            {
                AF: 0.6289,
                name: 'Global',
                source: 'gnomAD'
            },
            {
                AF: 0.5051,
                name: 'AFR',
                source: 'gnomAD'
            },
            {
                AF: 0.5701,
                name: 'AMR',
                source: 'gnomAD'
            },
            {
                AF: 0.668,
                name: 'ASJ',
                source: 'gnomAD'
            },
            {
                AF: 0.3673,
                name: 'EAS',
                source: 'gnomAD'
            },
            {
                AF: 0.7476,
                name: 'FIN',
                source: 'gnomAD'
            },
            {
                AF: 0.6737,
                name: 'NFE',
                source: 'gnomAD'
            },
            {
                AF: 0.6412,
                name: 'OTH',
                source: 'gnomAD'
            },
            {
                AF: 0.653,
                name: 'SAS',
                source: 'gnomAD'
            }
        ],
        supports: [
            {
                filters: ['CSQ', 'popAF'],
                libraries: [
                    {
                        alt_depth: 377,
                        depth: 460,
                        name: '19T000375_S11'
                    }
                ],
                quality: 10090.1,
                source: 'freebayes'
            },
            {
                filters: ['CSQ', 'popAF'],
                libraries: [
                    {
                        alt_depth: 375,
                        depth: 458,
                        name: '19T000375_S11'
                    }
                ],
                quality: 300.0,
                source: 'vardict'
            }
        ]
    },
    {
        annot: [
            {
                changes: {
                    HGVSc: 'NM_001007553.2:c.*4121C>T',
                    HGVSp: 'NP_001007554.1:p.(=)'
                },
                conseq: 'downstream_gene_variant',
                pathogenicity: {
                    CADD_phred: '2.697',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_001007553.3',
                    feature_type: 'Transcript',
                    symbol: 'CSDE1'
                }
            },
            {
                changes: {
                    HGVSc: 'NM_001130523.2:c.*4121C>T',
                    HGVSp: 'NP_001123995.1:p.(=)'
                },
                conseq: 'downstream_gene_variant',
                pathogenicity: {
                    CADD_phred: '2.697',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_001130523.3',
                    feature_type: 'Transcript',
                    symbol: 'CSDE1'
                }
            },
            {
                changes: {
                    HGVSc: 'NM_001242891.1:c.*4121C>T',
                    HGVSp: 'NP_001229820.1:p.(=)'
                },
                conseq: 'downstream_gene_variant',
                pathogenicity: {
                    CADD_phred: '2.697',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_001242891.1',
                    feature_type: 'Transcript',
                    symbol: 'CSDE1'
                }
            },
            {
                changes: {
                    HGVSc: 'NM_001242892.1:c.*4121C>T',
                    HGVSp: 'NP_001229821.1:p.(=)'
                },
                conseq: 'downstream_gene_variant',
                pathogenicity: {
                    CADD_phred: '2.697',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_001242892.2',
                    feature_type: 'Transcript',
                    symbol: 'CSDE1'
                }
            },
            {
                changes: {
                    HGVSc: 'NM_001242893.1:c.*4121C>T',
                    HGVSp: 'NP_001229822.1:p.(=)'
                },
                conseq: 'downstream_gene_variant',
                pathogenicity: {
                    CADD_phred: '2.697',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_001242893.2',
                    feature_type: 'Transcript',
                    symbol: 'CSDE1'
                }
            },
            {
                changes: {
                    HGVSc: 'NM_002524.5:c.112-70C>T',
                    HGVSp: 'NP_002515.1:p.(=)'
                },
                conseq: 'intron_variant',
                pathogenicity: {
                    CADD_phred: '2.697',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_002524.5',
                    feature_type: 'Transcript',
                    symbol: 'NRAS'
                }
            },
            {
                changes: {
                    HGVSc: 'NM_007158.5:c.*4121C>T',
                    HGVSp: 'NP_009089.4:p.(=)'
                },
                conseq: 'downstream_gene_variant',
                pathogenicity: {
                    CADD_phred: '2.697',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_007158.6',
                    feature_type: 'Transcript',
                    symbol: 'CSDE1'
                }
            }
        ],
        coord: {
            alt: 'A',
            assembly: 'GRCh38.p12',
            pos: 114714048,
            ref: 'G',
            region: '1'
        },
        pop_AF: [
            {
                AF: 0.9803,
                name: 'AFR',
                source: '1KG'
            },
            {
                AF: 0.8213,
                name: 'AMR',
                source: '1KG'
            },
            {
                AF: 0.999,
                name: 'EAS',
                source: '1KG'
            },
            {
                AF: 0.67,
                name: 'EUR',
                source: '1KG'
            },
            {
                AF: 0.8548,
                name: 'SAS',
                source: '1KG'
            }
        ],
        supports: [
            {
                filters: ['CSQ', 'OOT', 'lowDP', 'popAF'],
                libraries: [
                    {
                        alt_depth: 15,
                        depth: 19,
                        name: '19T000375_S11'
                    }
                ],
                quality: 285.669,
                source: 'freebayes'
            },
            {
                filters: ['CSQ', 'OOT', 'lowDP', 'popAF'],
                libraries: [
                    {
                        alt_depth: 12,
                        depth: 16,
                        name: '19T000375_S11'
                    }
                ],
                quality: 127.0,
                source: 'vardict'
            },
            {
                filters: ['CSQ', 'OOT', 'lowDP', 'popAF', 'germline'],
                libraries: [
                    {
                        alt_depth: 4,
                        depth: 7,
                        name: '19T000375_S11'
                    }
                ],
                quality: null,
                source: 'mutect2'
            }
        ]
    },
    {
        annot: [
            {
                changes: {
                    HGVSc: 'NM_005359.6:c.344G>T',
                    HGVSp: 'NP_005350.1:p.(Cys115Phe)'
                },
                conseq: 'missense_variant',
                pathogenicity: {
                    CADD_phred: '28.7',
                    ClinVar: null,
                    MetaLR_rankscore: '0.99091'
                },
                subject: {
                    feature: 'NM_005359.6',
                    feature_type: 'Transcript',
                    symbol: 'SMAD4'
                }
            }
        ],
        coord: {
            alt: 'T',
            assembly: 'GRCh38.p12',
            pos: 51048780,
            ref: 'G',
            region: '18'
        },
        pop_AF: [],
        supports: [
            {
                filters: ['lowAF', 'strandRatioBias', 'popConst'],
                libraries: [
                    {
                        alt_depth: 10,
                        depth: 501,
                        name: '19T000375_S11'
                    }
                ],
                quality: 6.99161e-15,
                source: 'freebayes'
            }
        ]
    },
    {
        annot: [
            {
                changes: {
                    HGVSc: 'NM_000455.5:c.374+60C>T',
                    HGVSp: 'NP_000446.1:p.(=)'
                },
                conseq: 'intron_variant',
                pathogenicity: {
                    CADD_phred: '0.550',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'NM_000455.5',
                    feature_type: 'Transcript',
                    symbol: 'STK11'
                }
            },
            {
                changes: {
                    HGVSc: null,
                    HGVSp: null
                },
                conseq: 'regulatory_region_variant',
                pathogenicity: {
                    CADD_phred: '0.550',
                    ClinVar: null,
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'ENSR00000581660',
                    feature_type: 'RegulatoryFeature',
                    symbol: null
                }
            }
        ],
        coord: {
            alt: 'T',
            assembly: 'GRCh38.p12',
            pos: 1218560,
            ref: 'C',
            region: '19'
        },
        pop_AF: [],
        supports: [
            {
                filters: ['CSQ', 'OOT', 'lowAD'],
                libraries: [
                    {
                        alt_depth: 4,
                        depth: 165,
                        name: '19T000375_S11'
                    }
                ],
                quality: 2.91408e-14,
                source: 'freebayes'
            },
            {
                filters: ['CSQ', 'OOT', 'lowAD'],
                libraries: [
                    {
                        alt_depth: 4,
                        depth: 171,
                        name: '19T000375_S11'
                    }
                ],
                quality: 70.0,
                source: 'vardict'
            }
        ]
    },
    {
        annot: [
            {
                changes: {
                    HGVSc: 'NM_000455.5:c.1100C>T',
                    HGVSp: 'NP_000446.1:p.(Thr367Met)'
                },
                conseq: 'missense_variant',
                pathogenicity: {
                    CADD_phred: '23.1',
                    ClinVar: 'uncertain_significance',
                    MetaLR_rankscore: '0.61060'
                },
                subject: {
                    feature: 'NM_000455.5',
                    feature_type: 'Transcript',
                    symbol: 'STK11'
                }
            },
            {
                changes: {
                    HGVSc: null,
                    HGVSp: null
                },
                conseq: 'regulatory_region_variant',
                pathogenicity: {
                    CADD_phred: '23.1',
                    ClinVar: 'uncertain_significance',
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'ENSR00000581661',
                    feature_type: 'RegulatoryFeature',
                    symbol: null
                }
            },
            {
                changes: {
                    HGVSc: null,
                    HGVSp: null
                },
                conseq: 'regulatory_region_variant',
                pathogenicity: {
                    CADD_phred: '23.1',
                    ClinVar: 'uncertain_significance',
                    MetaLR_rankscore: null
                },
                subject: {
                    feature: 'ENSR00001020823',
                    feature_type: 'RegulatoryFeature',
                    symbol: null
                }
            }
        ],
        coord: {
            alt: 'T',
            assembly: 'GRCh38.p12',
            pos: 1223164,
            ref: 'C',
            region: '19'
        },
        pop_AF: [
            {
                AF: 1.652e-5,
                name: 'Global',
                source: 'gnomAD'
            },
            {
                AF: 6.782e-5,
                name: 'AFR',
                source: 'gnomAD'
            },
            {
                AF: 0.0,
                name: 'AMR',
                source: 'gnomAD'
            },
            {
                AF: 0.0,
                name: 'ASJ',
                source: 'gnomAD'
            },
            {
                AF: 0.0,
                name: 'EAS',
                source: 'gnomAD'
            },
            {
                AF: 0.0,
                name: 'FIN',
                source: 'gnomAD'
            },
            {
                AF: 2.738e-5,
                name: 'NFE',
                source: 'gnomAD'
            },
            {
                AF: 0.0,
                name: 'OTH',
                source: 'gnomAD'
            },
            {
                AF: 0.0,
                name: 'SAS',
                source: 'gnomAD'
            }
        ],
        supports: [
            {
                filters: ['lowAD'],
                libraries: [
                    {
                        alt_depth: 6,
                        depth: 335,
                        name: '19T000375_S11'
                    }
                ],
                quality: 3.13406e-15,
                source: 'freebayes'
            },
            {
                filters: ['lowAD'],
                libraries: [
                    {
                        alt_depth: 7,
                        depth: 347,
                        name: '19T000375_S11'
                    }
                ],
                quality: 87.0,
                source: 'vardict'
            }
        ]
    }
];

export default mutations;

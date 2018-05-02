import { Component } from '@angular/core';
import { TreeService } from './tree.service';

@Component({
  selector: 'tree',
  templateUrl: './template.html',
  providers: [TreeService]
})
export class TreeComponent {

  constructor(private treeService: TreeService) {
  }

  user = {};
  name = 'IFB';
  options = [
    {
      "Entrypoint": "AE_Con",
      "nodes": [
        {
          "TemplateGrouping": "Asset Encumbrance",
          "nodes": [
            {
              "TemplateCode": "F 32.01",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Encumbrance overview - Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 32.02",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Encumbrance overview - Collateral (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Encumbrance overview - Collateral (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 32.03",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Not pledged. Own covered bonds and ABS issued and not yet pledged (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Not pledged. Own covered bonds and ABS issued and not yet pledged (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 32.04",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Sources of encumbrance (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Sources of encumbrance (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 33.00",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Maturity data (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Maturity data (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 34.00",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Contingent encumbrance (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Contingent encumbrance (b)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Contingent encumbrance (c)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 35.00",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Covered bonds issuance (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Covered bonds issuance (b)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Covered bonds issuance (c)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Covered bonds issuance (d)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 36.01",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Advance template for assets of the reporting institution (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Advance template for assets of the reporting institution (b)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Advance template for assets of the reporting institution (c)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 36.02",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Advance template for colllateral and own debt secrities issued other than covered bonds or ABSs (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Advance template for colllateral and own debt secrities issued other than covered bonds or ABSs (b)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Advance template for colllateral and own debt secrities issued other than covered bonds or ABSs (c)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "General Information - AE",
          "nodes": [
            {
              "TemplateCode": "A 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (AE)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "AE_Ind",
      "nodes": [
        {
          "TemplateGrouping": "1-General Information - AE",
          "nodes": [
            {
              "TemplateCode": "A 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (AE)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Asset Encumbrance",
          "nodes": [
            {
              "TemplateCode": "F 32.01",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Encumbrance overview - Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 32.02",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Encumbrance overview - Collateral (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Encumbrance overview - Collateral (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 32.03",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Not pledged. Own covered bonds and ABS issued and not yet pledged (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Not pledged. Own covered bonds and ABS issued and not yet pledged (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 32.04",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Sources of encumbrance (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Sources of encumbrance (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 33.00",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Maturity data (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Maturity data (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 34.00",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Contingent encumbrance (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Contingent encumbrance (b)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Contingent encumbrance (c)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 35.00",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Covered bonds issuance (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Covered bonds issuance (b)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Covered bonds issuance (c)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Covered bonds issuance (d)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 36.01",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Advance template for assets of the reporting institution (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Advance template for assets of the reporting institution (b)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Advance template for assets of the reporting institution (c)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 36.02",
              "nodes": [
                {
                  "TableVersionLabel": "Asset encumbrance: Advance template for colllateral and own debt secrities issued other than covered bonds or ABSs (a)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Advance template for colllateral and own debt secrities issued other than covered bonds or ABSs (b)"
                },
                {
                  "TableVersionLabel": "Asset encumbrance: Advance template for colllateral and own debt secrities issued other than covered bonds or ABSs (c)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "COREP_ALM_Con",
      "nodes": [
        {
          "TemplateGrouping": "Additional Liquidity Monitoring",
          "nodes": [
            {
              "TemplateCode": "C 66.01",
              "nodes": [
                {
                  "TableVersionLabel": "Maturity ladder. Significant currencies. Behavioural flows"
                },
                {
                  "TableVersionLabel": "Maturity ladder. Significant currencies. Initial stock"
                },
                {
                  "TableVersionLabel": "Maturity ladder. Significant currencies. Overnight and higher maturity"
                },
                {
                  "TableVersionLabel": "Maturity ladder. Total. Behavioural flows"
                },
                {
                  "TableVersionLabel": "Maturity ladder. Total. Initial stock"
                },
                {
                  "TableVersionLabel": "Maturity ladder. Total. Overnight and higher maturity"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 67.00",
              "nodes": [
                {
                  "TableVersionLabel": "Concentration of funding by counterparty. Significant currencies"
                },
                {
                  "TableVersionLabel": "Concentration of funding by counterparty. Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 68.00",
              "nodes": [
                {
                  "TableVersionLabel": "Concentration of funding by product type. Significant currencies"
                },
                {
                  "TableVersionLabel": "Concentration of funding by product type. Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 69.00",
              "nodes": [
                {
                  "TableVersionLabel": "Prices for various lengths of funding. Significant currencies"
                },
                {
                  "TableVersionLabel": "Prices for various lengths of funding. Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 70.00",
              "nodes": [
                {
                  "TableVersionLabel": "Roll-over of funding. Significant currencies"
                },
                {
                  "TableVersionLabel": "Roll-over of funding. Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 71.00",
              "nodes": [
                {
                  "TableVersionLabel": "Concentration of counterbalancing capacity by counterparty. Significant currencies"
                },
                {
                  "TableVersionLabel": "Concentration of counterbalancing capacity by counterparty. Total"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "General Information - COREP",
          "nodes": [
            {
              "TemplateCode": "C 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (COREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "COREP_ALM_Ind",
      "nodes": [
        {
          "TemplateGrouping": "Additional Liquidity Monitoring",
          "nodes": [
            {
              "TemplateCode": "C 66.01",
              "nodes": [
                {
                  "TableVersionLabel": "Maturity ladder. Significant currencies. Behavioural flows"
                },
                {
                  "TableVersionLabel": "Maturity ladder. Significant currencies. Initial stock"
                },
                {
                  "TableVersionLabel": "Maturity ladder. Significant currencies. Overnight and higher maturity"
                },
                {
                  "TableVersionLabel": "Maturity ladder. Total. Behavioural flows"
                },
                {
                  "TableVersionLabel": "Maturity ladder. Total. Initial stock"
                },
                {
                  "TableVersionLabel": "Maturity ladder. Total. Overnight and higher maturity"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 67.00",
              "nodes": [
                {
                  "TableVersionLabel": "Concentration of funding by counterparty. Significant currencies"
                },
                {
                  "TableVersionLabel": "Concentration of funding by counterparty. Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 68.00",
              "nodes": [
                {
                  "TableVersionLabel": "Concentration of funding by product type. Significant currencies"
                },
                {
                  "TableVersionLabel": "Concentration of funding by product type. Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 69.00",
              "nodes": [
                {
                  "TableVersionLabel": "Prices for various lengths of funding. Significant currencies"
                },
                {
                  "TableVersionLabel": "Prices for various lengths of funding. Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 70.00",
              "nodes": [
                {
                  "TableVersionLabel": "Roll-over of funding. Significant currencies"
                },
                {
                  "TableVersionLabel": "Roll-over of funding. Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 71.00",
              "nodes": [
                {
                  "TableVersionLabel": "Concentration of counterbalancing capacity by counterparty. Significant currencies"
                },
                {
                  "TableVersionLabel": "Concentration of counterbalancing capacity by counterparty. Total"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "General Information - COREP",
          "nodes": [
            {
              "TemplateCode": "C 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (COREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "COREP_Con",
      "nodes": [
        {
          "TemplateGrouping": "Capital Adequacy",
          "nodes": [
            {
              "TemplateCode": "C 01.00",
              "nodes": [
                {
                  "TableVersionLabel": "Capital Adequacy - Own funds definition"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 02.00",
              "nodes": [
                {
                  "TableVersionLabel": "Capital Adequacy - Risk Exposure Amounts"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 03.00",
              "nodes": [
                {
                  "TableVersionLabel": "Capital Adequacy - Ratios"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 04.00",
              "nodes": [
                {
                  "TableVersionLabel": "Capital Adequacy - Memorandum Items"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 05.01",
              "nodes": [
                {
                  "TableVersionLabel": "Capital Adequacy - Transitional provisions: Summary"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 05.02",
              "nodes": [
                {
                  "TableVersionLabel": "Capital Adequacy - Transitional provisions: Grandfathered instruments not constituting State aid"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Credit Risk",
          "nodes": [
            {
              "TemplateCode": "C 07.00",
              "nodes": [
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: Standardised Approach to capital requirements"
                },
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: Standardised Approach to capital requirements - Memorandum items - in default"
                },
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: Standardised Approach to capital requirements - Memorandum items - Secured on Property"
                },
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: Standardised Approach to capital requirements - Of which: Arising from Counterparty Credit Risk"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 08.01",
              "nodes": [
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: IRB Approach to capital requirements - TOTAL"
                },
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: IRB Approach to capital requirements - TOTAL - Of which arising from counterparty credit risk and off balance sheet"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 08.02",
              "nodes": [
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: IRB Approach to capital requirements - Breakdown of exposures assigned to obligor grades or pools by obligor grades"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 09.01",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of exposures by residence of the obligor (SA exposures)"
                },
                {
                  "TableVersionLabel": "Geographical breakdown of exposures by residence of the obligor (SA exposures) - Exposures in default"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 09.02",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of exposures by residence of the obligor (IRB exposures)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 09.04",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of credit exposures relevant for the calculation of the countercyclical buffer by country and institution-specific countercyclical buffer rate"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 10.01",
              "nodes": [
                {
                  "TableVersionLabel": "Credit risk: Equity - IRB approaches to capital requirements - TOTAL"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 10.02",
              "nodes": [
                {
                  "TableVersionLabel": "Credit risk: Equity - IRB approaches to capital requirements - Breakdown of total exposures under the PD/LGD Approach by obligor grades"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 11.00",
              "nodes": [
                {
                  "TableVersionLabel": "Settlement/Delivery risk"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 12.00",
              "nodes": [
                {
                  "TableVersionLabel": "Credit risk: Securitisations - Standardised Approach to own funds requirements"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 13.00",
              "nodes": [
                {
                  "TableVersionLabel": "Credit risk: Securitisations - IRB Approach to own funds requirements"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 14.00",
              "nodes": [
                {
                  "TableVersionLabel": "Detailed information on securitisations"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 15.00",
              "nodes": [
                {
                  "TableVersionLabel": "Exposures and losses from lending collateralised immovable property"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "General Information - COREP",
          "nodes": [
            {
              "TemplateCode": "C 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (COREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Group Solvency",
          "nodes": [
            {
              "TemplateCode": "C 06.01",
              "nodes": [
                {
                  "TableVersionLabel": "Group Solvency - Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 06.02",
              "nodes": [
                {
                  "TableVersionLabel": "Group Solvency"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Leverage Ratio",
          "nodes": [
            {
              "TemplateCode": "C 40.00",
              "nodes": [
                {
                  "TableVersionLabel": "Alternative treatment of the Exposure Measure"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 41.00",
              "nodes": [
                {
                  "TableVersionLabel": "On- and off-balance sheet items – additional breakdown of exposures"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 42.00",
              "nodes": [
                {
                  "TableVersionLabel": "Alternative definition of capital"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 43.00",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of leverage ratio exposure measure components: Off-balance sheet items, derivatives, SFTs and trading book"
                },
                {
                  "TableVersionLabel": "Breakdown of leverage ratio exposure measure components: Other non-trading book exposures (IRB)"
                },
                {
                  "TableVersionLabel": "Breakdown of leverage ratio exposure measure components: Other non-trading book exposures (SA)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 44.00",
              "nodes": [
                {
                  "TableVersionLabel": "General Information"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 47.00",
              "nodes": [
                {
                  "TableVersionLabel": "Leverage ratio calculation"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Market Risk",
          "nodes": [
            {
              "TemplateCode": "C 18.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Standardised Approach for traded debt instruments"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 19.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Standardised Approach for specific risk in securitisations"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 20.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Standardised Approach for specific risk in the correlation trading portfolio"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 21.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Standardised Approach for position risk in equities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 22.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Standardised Approaches for foreign exchange risk"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 23.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Standardised Approach for position risk in commodities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 24.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Internal models - Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 25.00",
              "nodes": [
                {
                  "TableVersionLabel": "CVA RISK"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Operational Risk",
          "nodes": [
            {
              "TemplateCode": "C 16.00",
              "nodes": [
                {
                  "TableVersionLabel": "Operational risk - AMA"
                },
                {
                  "TableVersionLabel": "Operational risk - Excluding AMA"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 17.01",
              "nodes": [
                {
                  "TableVersionLabel": "Operational risk: Losses and recoveries by business lines and event types in the last year"
                },
                {
                  "TableVersionLabel": "Operational risk: Thresholds applied in data collections"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 17.02",
              "nodes": [
                {
                  "TableVersionLabel": "Operational risk: Large loss events"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Sovereign exposures",
          "nodes": [
            {
              "TemplateCode": "C 33.00",
              "nodes": [
                {
                  "TableVersionLabel": "General governments exposures by country of the counterparty and regulatory approach (Gov)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "COREP_Ind",
      "nodes": [
        {
          "TemplateGrouping": "Capital Adequacy",
          "nodes": [
            {
              "TemplateCode": "C 01.00",
              "nodes": [
                {
                  "TableVersionLabel": "Capital Adequacy - Own funds definition"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 02.00",
              "nodes": [
                {
                  "TableVersionLabel": "Capital Adequacy - Risk Exposure Amounts"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 03.00",
              "nodes": [
                {
                  "TableVersionLabel": "Capital Adequacy - Ratios"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 04.00",
              "nodes": [
                {
                  "TableVersionLabel": "Capital Adequacy - Memorandum Items"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 05.01",
              "nodes": [
                {
                  "TableVersionLabel": "Capital Adequacy - Transitional provisions: Summary"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 05.02",
              "nodes": [
                {
                  "TableVersionLabel": "Capital Adequacy - Transitional provisions: Grandfathered instruments not constituting State aid"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Credit Risk",
          "nodes": [
            {
              "TemplateCode": "C 07.00",
              "nodes": [
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: Standardised Approach to capital requirements"
                },
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: Standardised Approach to capital requirements - Memorandum items - in default"
                },
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: Standardised Approach to capital requirements - Memorandum items - Secured on Property"
                },
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: Standardised Approach to capital requirements - Of which: Arising from Counterparty Credit Risk"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 08.01",
              "nodes": [
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: IRB Approach to capital requirements - TOTAL"
                },
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: IRB Approach to capital requirements - TOTAL - Of which arising from counterparty credit risk and off balance sheet"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 08.02",
              "nodes": [
                {
                  "TableVersionLabel": "Credit and counterparty credit risks and free deliveries: IRB Approach to capital requirements - Breakdown of exposures assigned to obligor grades or pools by obligor grades"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 09.01",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of exposures by residence of the obligor (SA exposures)"
                },
                {
                  "TableVersionLabel": "Geographical breakdown of exposures by residence of the obligor (SA exposures) - Exposures in default"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 09.02",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of exposures by residence of the obligor (IRB exposures)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 09.04",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of credit exposures relevant for the calculation of the countercyclical buffer by country and institution-specific countercyclical buffer rate"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 10.01",
              "nodes": [
                {
                  "TableVersionLabel": "Credit risk: Equity - IRB approaches to capital requirements - TOTAL"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 10.02",
              "nodes": [
                {
                  "TableVersionLabel": "Credit risk: Equity - IRB approaches to capital requirements - Breakdown of total exposures under the PD/LGD Approach by obligor grades"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 11.00",
              "nodes": [
                {
                  "TableVersionLabel": "Settlement/Delivery risk"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 12.00",
              "nodes": [
                {
                  "TableVersionLabel": "Credit risk: Securitisations - Standardised Approach to own funds requirements"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 13.00",
              "nodes": [
                {
                  "TableVersionLabel": "Credit risk: Securitisations - IRB Approach to own funds requirements"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 14.00",
              "nodes": [
                {
                  "TableVersionLabel": "Detailed information on securitisations"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 15.00",
              "nodes": [
                {
                  "TableVersionLabel": "Exposures and losses from lending collateralised immovable property"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "General Information - COREP",
          "nodes": [
            {
              "TemplateCode": "C 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (COREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Leverage Ratio",
          "nodes": [
            {
              "TemplateCode": "C 40.00",
              "nodes": [
                {
                  "TableVersionLabel": "Alternative treatment of the Exposure Measure"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 41.00",
              "nodes": [
                {
                  "TableVersionLabel": "On- and off-balance sheet items – additional breakdown of exposures"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 42.00",
              "nodes": [
                {
                  "TableVersionLabel": "Alternative definition of capital"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 43.00",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of leverage ratio exposure measure components: Off-balance sheet items, derivatives, SFTs and trading book"
                },
                {
                  "TableVersionLabel": "Breakdown of leverage ratio exposure measure components: Other non-trading book exposures (IRB)"
                },
                {
                  "TableVersionLabel": "Breakdown of leverage ratio exposure measure components: Other non-trading book exposures (SA)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 44.00",
              "nodes": [
                {
                  "TableVersionLabel": "General Information"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 47.00",
              "nodes": [
                {
                  "TableVersionLabel": "Leverage ratio calculation"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Market Risk",
          "nodes": [
            {
              "TemplateCode": "C 18.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Standardised Approach for traded debt instruments"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 19.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Standardised Approach for specific risk in securitisations"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 20.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Standardised Approach for specific risk in the correlation trading portfolio"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 21.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Standardised Approach for position risk in equities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 22.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Standardised Approaches for foreign exchange risk"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 23.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Standardised Approach for position risk in commodities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 24.00",
              "nodes": [
                {
                  "TableVersionLabel": "Market risk: Internal models - Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 25.00",
              "nodes": [
                {
                  "TableVersionLabel": "CVA RISK"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Operational Risk",
          "nodes": [
            {
              "TemplateCode": "C 16.00",
              "nodes": [
                {
                  "TableVersionLabel": "Operational risk - AMA"
                },
                {
                  "TableVersionLabel": "Operational risk - Excluding AMA"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 17.01",
              "nodes": [
                {
                  "TableVersionLabel": "Operational risk: Losses and recoveries by business lines and event types in the last year"
                },
                {
                  "TableVersionLabel": "Operational risk: Thresholds applied in data collections"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 17.02",
              "nodes": [
                {
                  "TableVersionLabel": "Operational risk: Large loss events"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Sovereign exposures",
          "nodes": [
            {
              "TemplateCode": "C 33.00",
              "nodes": [
                {
                  "TableVersionLabel": "General governments exposures by country of the counterparty and regulatory approach (Gov)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "COREP_LCR_Con",
      "nodes": [
        {
          "TemplateGrouping": "Liquidity Coverage",
          "nodes": [
            {
              "TemplateCode": "C 51.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Liquid assets (I). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Liquid assets (I). Total"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Liquid assets (II). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Liquid assets (II). Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 52.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (I). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (I). Total"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (II). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (II). Total"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (III). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (III). Total"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (IV). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (IV). Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 53.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows (I). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows (I). Total"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows (II). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows (II). Total"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows (III). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows (III). Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 54.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Collateral swaps. Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Collateral swaps. Total"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "COREP_LCR_DA_Con",
      "nodes": [
        {
          "TemplateGrouping": "General Information - COREP",
          "nodes": [
            {
              "TemplateCode": "C 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (COREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "LCR. Delegated Act",
          "nodes": [
            {
              "TemplateCode": "C 72.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage . Liquid assets. Total (DA)"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Liquid assets. Significant currencies (DA)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 73.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows. Significant currencies (DA)"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows. Total (DA)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 74.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows. Significant currencies (DA)"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows. Total (DA)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 75.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Collateral swaps. Significant currencies (DA)"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Collateral swaps. Total (DA)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 76.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Calculations. Significant currencies (DA)"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Calculations. Total (DA)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "COREP_LCR_DA_Ind",
      "nodes": [
        {
          "TemplateGrouping": "LCR. Delegated Act",
          "nodes": [
            {
              "TemplateCode": "C 72.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage . Liquid assets. Total (DA)"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Liquid assets. Significant currencies (DA)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 73.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows. Significant currencies (DA)"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows. Total (DA)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 74.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows. Significant currencies (DA)"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows. Total (DA)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 75.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Collateral swaps. Significant currencies (DA)"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Collateral swaps. Total (DA)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 76.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Calculations. Significant currencies (DA)"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Calculations. Total (DA)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "COREP_LCR_Ind",
      "nodes": [
        {
          "TemplateGrouping": "General Information - COREP",
          "nodes": [
            {
              "TemplateCode": "C 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (COREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Liquidity Coverage",
          "nodes": [
            {
              "TemplateCode": "C 51.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Liquid assets (I). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Liquid assets (I). Total"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Liquid assets (II). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Liquid assets (II). Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 52.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (I). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (I). Total"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (II). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (II). Total"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (III). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (III). Total"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (IV). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Outflows (IV). Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 53.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows (I). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows (I). Total"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows (II). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows (II). Total"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows (III). Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Inflows (III). Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 54.00",
              "nodes": [
                {
                  "TableVersionLabel": "Liquidity Coverage. Collateral swaps. Significant currencies"
                },
                {
                  "TableVersionLabel": "Liquidity Coverage. Collateral swaps. Total"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "COREP_LE_Con",
      "nodes": [
        {
          "TemplateGrouping": "General Information - COREP",
          "nodes": [
            {
              "TemplateCode": "C 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (COREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Large Exposures",
          "nodes": [
            {
              "TemplateCode": "C 26.00",
              "nodes": [
                {
                  "TableVersionLabel": "Large exposures limits"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 27.00",
              "nodes": [
                {
                  "TableVersionLabel": "Identification of the counterparty"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 28.00",
              "nodes": [
                {
                  "TableVersionLabel": "Exposures in the non-trading and trading book"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 29.00",
              "nodes": [
                {
                  "TableVersionLabel": "Detail of the exposures to individual clients within groups of connected clients"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 30.00",
              "nodes": [
                {
                  "TableVersionLabel": "Maturity buckets of the 10 largest exposures to institutions and the 10 largest exposures to unregulated financial entities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 31.00",
              "nodes": [
                {
                  "TableVersionLabel": "Maturity buckets of the 10 largest exposures to institutions and the 10 largest exposures to unregulated financial entities: detail of the exposures to individual clients within groups of connected clients"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "COREP_LE_Ind",
      "nodes": [
        {
          "TemplateGrouping": "General Information - COREP",
          "nodes": [
            {
              "TemplateCode": "C 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (COREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Large Exposures",
          "nodes": [
            {
              "TemplateCode": "C 26.00",
              "nodes": [
                {
                  "TableVersionLabel": "Large exposures limits"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 27.00",
              "nodes": [
                {
                  "TableVersionLabel": "Identification of the counterparty"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 28.00",
              "nodes": [
                {
                  "TableVersionLabel": "Exposures in the non-trading and trading book"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 29.00",
              "nodes": [
                {
                  "TableVersionLabel": "Detail of the exposures to individual clients within groups of connected clients"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 30.00",
              "nodes": [
                {
                  "TableVersionLabel": "Maturity buckets of the 10 largest exposures to institutions and the 10 largest exposures to unregulated financial entities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 31.00",
              "nodes": [
                {
                  "TableVersionLabel": "Maturity buckets of the 10 largest exposures to institutions and the 10 largest exposures to unregulated financial entities: detail of the exposures to individual clients within groups of connected clients"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "COREP_NSFR_Con",
      "nodes": [
        {
          "TemplateGrouping": "General Information - COREP",
          "nodes": [
            {
              "TemplateCode": "C 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (COREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Stable Funding",
          "nodes": [
            {
              "TemplateCode": "C 60.00",
              "nodes": [
                {
                  "TableVersionLabel": "Stable funding. Items requiring stable funding (I). Significant currencies"
                },
                {
                  "TableVersionLabel": "Stable funding. Items requiring stable funding (I). Total"
                },
                {
                  "TableVersionLabel": "Stable funding. Items requiring stable funding (II). Significant currencies"
                },
                {
                  "TableVersionLabel": "Stable funding. Items requiring stable funding (II). Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 61.00",
              "nodes": [
                {
                  "TableVersionLabel": "Stable funding. Items providing stable funding (I). Significant currencies"
                },
                {
                  "TableVersionLabel": "Stable funding. Items providing stable funding (I). Total"
                },
                {
                  "TableVersionLabel": "Stable funding. Items providing stable funding (II). Significant currencies"
                },
                {
                  "TableVersionLabel": "Stable funding. Items providing stable funding (II). Total"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "COREP_NSFR_Ind",
      "nodes": [
        {
          "TemplateGrouping": "General Information - COREP",
          "nodes": [
            {
              "TemplateCode": "C 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (COREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Stable Funding",
          "nodes": [
            {
              "TemplateCode": "C 60.00",
              "nodes": [
                {
                  "TableVersionLabel": "Stable funding. Items requiring stable funding (I). Significant currencies"
                },
                {
                  "TableVersionLabel": "Stable funding. Items requiring stable funding (I). Total"
                },
                {
                  "TableVersionLabel": "Stable funding. Items requiring stable funding (II). Significant currencies"
                },
                {
                  "TableVersionLabel": "Stable funding. Items requiring stable funding (II). Total"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "C 61.00",
              "nodes": [
                {
                  "TableVersionLabel": "Stable funding. Items providing stable funding (I). Significant currencies"
                },
                {
                  "TableVersionLabel": "Stable funding. Items providing stable funding (I). Total"
                },
                {
                  "TableVersionLabel": "Stable funding. Items providing stable funding (II). Significant currencies"
                },
                {
                  "TableVersionLabel": "Stable funding. Items providing stable funding (II). Total"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "FINREP9_Con_GAAP",
      "nodes": [
        {
          "TemplateGrouping": "FINREP part 1",
          "nodes": [
            {
              "TemplateCode": "F 01.01",
              "nodes": [
                {
                  "TableVersionLabel": "Balance Sheet Statement [Statement of Financial Position]: Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 01.02",
              "nodes": [
                {
                  "TableVersionLabel": "Balance Sheet Statement [Statement of Financial Position]: Liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 01.03",
              "nodes": [
                {
                  "TableVersionLabel": "Balance Sheet Statement [Statement of Financial Position]: Equity"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 02.00",
              "nodes": [
                {
                  "TableVersionLabel": "Statement of profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 03.00",
              "nodes": [
                {
                  "TableVersionLabel": "Statement of comprehensive income"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets held for trading"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.02.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: non-trading financial assets mandatorily at fair value through profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.02.2",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets designated at fair value through profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.03.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets at fair value through other comprehensive income"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.04.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets at amortised cost"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.05",
              "nodes": [
                {
                  "TableVersionLabel": "Subordinated financial assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 05.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of non-trading loans and advances by product: Loan and advances other than held for trading by product"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 06.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of non-trading loans and advances to non-financial corporations by NACE codes"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 07.01",
              "nodes": [
                {
                  "TableVersionLabel": "Financial assets subject to impairment that are past due"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 08.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial liabilities by product and by counterparty (a)"
                },
                {
                  "TableVersionLabel": "Breakdown of financial liabilities by product and by counterparty (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 08.02",
              "nodes": [
                {
                  "TableVersionLabel": "Subordinated liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 09.01.1",
              "nodes": [
                {
                  "TableVersionLabel": "Off-balance sheet exposures : Loan commitments, financial guarantees and other commitments given"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 09.02",
              "nodes": [
                {
                  "TableVersionLabel": "Loan commitments, financial guarantees and other commitments received"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 10.00",
              "nodes": [
                {
                  "TableVersionLabel": "Derivatives: Trading and economic hedges"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.01",
              "nodes": [
                {
                  "TableVersionLabel": "Derivatives - Hedge accounting: Breakdown by type of risk and type of hedge"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.03",
              "nodes": [
                {
                  "TableVersionLabel": "Non-derivative hedging instruments: Breakdown by accounting portfolio and type of hedge"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.04",
              "nodes": [
                {
                  "TableVersionLabel": "Hedged items in fair value hedges"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 12.01",
              "nodes": [
                {
                  "TableVersionLabel": "Movements in allowances and provisions for credit losses (I)"
                },
                {
                  "TableVersionLabel": "Movements in allowances and provisions for credit losses (II)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 12.02",
              "nodes": [
                {
                  "TableVersionLabel": "Transfers between impairment stages (gross basis presentation)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 13.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of collateral and guarantees by loans and advances other than held for trading"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 13.02",
              "nodes": [
                {
                  "TableVersionLabel": "Collateral obtained by taking possession during the period (held at the reporting date)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 13.03",
              "nodes": [
                {
                  "TableVersionLabel": "Collateral obtained by taking possession [tangible assets] accumulated"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 14.00",
              "nodes": [
                {
                  "TableVersionLabel": "Fair value hierarchy: financial instruments at fair value"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 15.00",
              "nodes": [
                {
                  "TableVersionLabel": "Derecognition and financial liabilities associated with transferred financial assets: Derivatives, Deposits, Debt securities issued, Other financial liabilities"
                },
                {
                  "TableVersionLabel": "Derecognition and financial liabilities associated with transferred financial assets: Equity instruments, debt securities, loans and advances"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Interest income and expenses by instrument and counterparty sector (a)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.02",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on derecognition of financial assets and liabilities not measured at fair value through profit or loss by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.03",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on financial assets and liabilities held for trading and trading financial assets and trading financial liabilities by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.04",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on financial assets and liabilities held for trading and trading financial assets and trading financial liabilities by risk"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.04.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on non-trading financial assets mandatorily at fair value through profit or loss by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.05",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on financial assets and liabilities designated at fair value through profit or loss by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.06",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains and losses from hedge accounting"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.07",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Impairment on non-financial assets (a)"
                },
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Impairment on non-financial assets (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 17.01",
              "nodes": [
                {
                  "TableVersionLabel": "Reconciliation between IFRS and CRR scope of consolidation: Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 17.02",
              "nodes": [
                {
                  "TableVersionLabel": "Reconciliation between IFRS and CRR scope of consolidation: Off-balance sheet exposures - loan commitments, financial guarantees and other commitments given"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 17.03",
              "nodes": [
                {
                  "TableVersionLabel": "Reconciliation between IFRS and CRR scope of consolidation: Liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 18.00",
              "nodes": [
                {
                  "TableVersionLabel": "Information on performing and non-performing exposures (I)"
                },
                {
                  "TableVersionLabel": "Information on performing and non-performing exposures (II)"
                },
                {
                  "TableVersionLabel": "Information on performing and non-performing exposures (III)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 19.00",
              "nodes": [
                {
                  "TableVersionLabel": "Information forborn exposures (I)"
                },
                {
                  "TableVersionLabel": "Information forborn exposures (II)"
                },
                {
                  "TableVersionLabel": "Information forborn exposures (III)"
                },
                {
                  "TableVersionLabel": "Information forborn exposures (IV)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 1 (GAAP only)",
          "nodes": [
            {
              "TemplateCode": "F 04.06",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: trading financial assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.07",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: non-trading non-derivative financial assets measured at fair value through profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.08",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: non-trading non-derivative financial assets measured at fair value to equity"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.09",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: non-trading non-derivative financial assets measured at a cost-based method"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.10",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: other non-trading non-derivative financial assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 07.02",
              "nodes": [
                {
                  "TableVersionLabel": "Financial assets subject to impairment that are past due under national GAAP"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 09.01",
              "nodes": [
                {
                  "TableVersionLabel": "Off-balance sheet exposures under national GAAP: Loan commitments, financial guarantees and other commitments given"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.02",
              "nodes": [
                {
                  "TableVersionLabel": "Derivatives - Hedge accounting under National GAAP: Breakdown by type of risk"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.03.1",
              "nodes": [
                {
                  "TableVersionLabel": "Non-derivative hedging instruments under national GAAP: breakdown by accounting portfolio"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 12.00",
              "nodes": [
                {
                  "TableVersionLabel": "Movements in allowances for credit losses and impairment of equity instruments under national GAAP"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 2",
          "nodes": [
            {
              "TemplateCode": "F 20.01",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of assets by location of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.02",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of liabilities by location of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.03",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of main income statement items by location of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.04",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of assets by residence of the counterparty"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.05",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of off-balance sheet items subject to credit risk by residence of the counterparty (a)"
                },
                {
                  "TableVersionLabel": "Geographical breakdown of off-balance sheet items subject to credit risk by residence of the counterparty (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.06",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of liabilities by residence of the counterparty"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.07.1",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown by residence of the counterparty of loans and advances other than held ofr trading to non-financial corporations by NACE codes"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 21.00",
              "nodes": [
                {
                  "TableVersionLabel": "Tangible and intangible assets: assets subject to operating lease"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 22.01",
              "nodes": [
                {
                  "TableVersionLabel": "Fee and commission income and expenses by activity"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 22.02",
              "nodes": [
                {
                  "TableVersionLabel": "Assets involved in the services provided"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 3",
          "nodes": [
            {
              "TemplateCode": "F 30.01",
              "nodes": [
                {
                  "TableVersionLabel": "Interests in unconsolidated structured entities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 30.02",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of interests in unconsolidated structured entities by nature of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 31.01",
              "nodes": [
                {
                  "TableVersionLabel": "Related parties: amounts payable to and amounts receivable from"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 31.02",
              "nodes": [
                {
                  "TableVersionLabel": "Related parties: expenses and income generated by transactions with"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 4",
          "nodes": [
            {
              "TemplateCode": "F 40.01",
              "nodes": [
                {
                  "TableVersionLabel": "Scope of the group: “entity-by-entity”"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 40.02",
              "nodes": [
                {
                  "TableVersionLabel": "Scope of the group: \"instrument-by-instrument\""
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 41.01",
              "nodes": [
                {
                  "TableVersionLabel": "Fair value hierarchy: financial instruments at amortised cost"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 41.02",
              "nodes": [
                {
                  "TableVersionLabel": "Use of the Fair Value Option"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 42.00",
              "nodes": [
                {
                  "TableVersionLabel": "Tangible and intangible assets: carrying amount"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 43.00",
              "nodes": [
                {
                  "TableVersionLabel": "Provisions"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 44.01",
              "nodes": [
                {
                  "TableVersionLabel": "Components of net defined benefit plan assets and liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 44.02",
              "nodes": [
                {
                  "TableVersionLabel": "Movements in defined benefit plans and employee benefits"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 44.03",
              "nodes": [
                {
                  "TableVersionLabel": "Memo items [related to staff expenses]"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 45.01",
              "nodes": [
                {
                  "TableVersionLabel": "Gains and losses on financial assets and liabilities designated at fair value through profit or loss by accounting portfolio"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 45.02",
              "nodes": [
                {
                  "TableVersionLabel": "Gains or losses on derecognition of non-financial assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 45.03",
              "nodes": [
                {
                  "TableVersionLabel": "Other operating income and expenses"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 46.00",
              "nodes": [
                {
                  "TableVersionLabel": "Statement of changes in equity"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "General Information - FINREP",
          "nodes": [
            {
              "TemplateCode": "F 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (FINREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "FINREP9_Con_IFRS",
      "nodes": [
        {
          "TemplateGrouping": "FINREP part 1",
          "nodes": [
            {
              "TemplateCode": "F 01.01",
              "nodes": [
                {
                  "TableVersionLabel": "Balance Sheet Statement [Statement of Financial Position]: Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 01.02",
              "nodes": [
                {
                  "TableVersionLabel": "Balance Sheet Statement [Statement of Financial Position]: Liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 01.03",
              "nodes": [
                {
                  "TableVersionLabel": "Balance Sheet Statement [Statement of Financial Position]: Equity"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 02.00",
              "nodes": [
                {
                  "TableVersionLabel": "Statement of profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 03.00",
              "nodes": [
                {
                  "TableVersionLabel": "Statement of comprehensive income"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets held for trading"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.02.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: non-trading financial assets mandatorily at fair value through profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.02.2",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets designated at fair value through profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.03.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets at fair value through other comprehensive income"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.04.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets at amortised cost"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.05",
              "nodes": [
                {
                  "TableVersionLabel": "Subordinated financial assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 05.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of non-trading loans and advances by product: Loan and advances other than held for trading by product"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 06.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of non-trading loans and advances to non-financial corporations by NACE codes"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 07.01",
              "nodes": [
                {
                  "TableVersionLabel": "Financial assets subject to impairment that are past due"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 08.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial liabilities by product and by counterparty (a)"
                },
                {
                  "TableVersionLabel": "Breakdown of financial liabilities by product and by counterparty (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 08.02",
              "nodes": [
                {
                  "TableVersionLabel": "Subordinated liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 09.01.1",
              "nodes": [
                {
                  "TableVersionLabel": "Off-balance sheet exposures : Loan commitments, financial guarantees and other commitments given"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 09.02",
              "nodes": [
                {
                  "TableVersionLabel": "Loan commitments, financial guarantees and other commitments received"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 10.00",
              "nodes": [
                {
                  "TableVersionLabel": "Derivatives: Trading and economic hedges"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.01",
              "nodes": [
                {
                  "TableVersionLabel": "Derivatives - Hedge accounting: Breakdown by type of risk and type of hedge"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.03",
              "nodes": [
                {
                  "TableVersionLabel": "Non-derivative hedging instruments: Breakdown by accounting portfolio and type of hedge"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.04",
              "nodes": [
                {
                  "TableVersionLabel": "Hedged items in fair value hedges"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 12.01",
              "nodes": [
                {
                  "TableVersionLabel": "Movements in allowances and provisions for credit losses (I)"
                },
                {
                  "TableVersionLabel": "Movements in allowances and provisions for credit losses (II)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 12.02",
              "nodes": [
                {
                  "TableVersionLabel": "Transfers between impairment stages (gross basis presentation)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 13.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of collateral and guarantees by loans and advances other than held for trading"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 13.02",
              "nodes": [
                {
                  "TableVersionLabel": "Collateral obtained by taking possession during the period (held at the reporting date)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 13.03",
              "nodes": [
                {
                  "TableVersionLabel": "Collateral obtained by taking possession [tangible assets] accumulated"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 14.00",
              "nodes": [
                {
                  "TableVersionLabel": "Fair value hierarchy: financial instruments at fair value"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 15.00",
              "nodes": [
                {
                  "TableVersionLabel": "Derecognition and financial liabilities associated with transferred financial assets: Derivatives, Deposits, Debt securities issued, Other financial liabilities"
                },
                {
                  "TableVersionLabel": "Derecognition and financial liabilities associated with transferred financial assets: Equity instruments, debt securities, loans and advances"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Interest income and expenses by instrument and counterparty sector (a)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.02",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on derecognition of financial assets and liabilities not measured at fair value through profit or loss by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.03",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on financial assets and liabilities held for trading and trading financial assets and trading financial liabilities by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.04",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on financial assets and liabilities held for trading and trading financial assets and trading financial liabilities by risk"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.04.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on non-trading financial assets mandatorily at fair value through profit or loss by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.05",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on financial assets and liabilities designated at fair value through profit or loss by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.06",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains and losses from hedge accounting"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.07",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Impairment on non-financial assets (a)"
                },
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Impairment on non-financial assets (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 17.01",
              "nodes": [
                {
                  "TableVersionLabel": "Reconciliation between IFRS and CRR scope of consolidation: Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 17.02",
              "nodes": [
                {
                  "TableVersionLabel": "Reconciliation between IFRS and CRR scope of consolidation: Off-balance sheet exposures - loan commitments, financial guarantees and other commitments given"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 17.03",
              "nodes": [
                {
                  "TableVersionLabel": "Reconciliation between IFRS and CRR scope of consolidation: Liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 18.00",
              "nodes": [
                {
                  "TableVersionLabel": "Information on performing and non-performing exposures (I)"
                },
                {
                  "TableVersionLabel": "Information on performing and non-performing exposures (II)"
                },
                {
                  "TableVersionLabel": "Information on performing and non-performing exposures (III)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 19.00",
              "nodes": [
                {
                  "TableVersionLabel": "Information forborn exposures (I)"
                },
                {
                  "TableVersionLabel": "Information forborn exposures (II)"
                },
                {
                  "TableVersionLabel": "Information forborn exposures (III)"
                },
                {
                  "TableVersionLabel": "Information forborn exposures (IV)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 2",
          "nodes": [
            {
              "TemplateCode": "F 20.01",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of assets by location of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.02",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of liabilities by location of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.03",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of main income statement items by location of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.04",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of assets by residence of the counterparty"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.05",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of off-balance sheet items subject to credit risk by residence of the counterparty (a)"
                },
                {
                  "TableVersionLabel": "Geographical breakdown of off-balance sheet items subject to credit risk by residence of the counterparty (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.06",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of liabilities by residence of the counterparty"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.07.1",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown by residence of the counterparty of loans and advances other than held ofr trading to non-financial corporations by NACE codes"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 21.00",
              "nodes": [
                {
                  "TableVersionLabel": "Tangible and intangible assets: assets subject to operating lease"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 22.01",
              "nodes": [
                {
                  "TableVersionLabel": "Fee and commission income and expenses by activity"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 22.02",
              "nodes": [
                {
                  "TableVersionLabel": "Assets involved in the services provided"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 3",
          "nodes": [
            {
              "TemplateCode": "F 30.01",
              "nodes": [
                {
                  "TableVersionLabel": "Interests in unconsolidated structured entities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 30.02",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of interests in unconsolidated structured entities by nature of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 31.01",
              "nodes": [
                {
                  "TableVersionLabel": "Related parties: amounts payable to and amounts receivable from"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 31.02",
              "nodes": [
                {
                  "TableVersionLabel": "Related parties: expenses and income generated by transactions with"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 4",
          "nodes": [
            {
              "TemplateCode": "F 40.01",
              "nodes": [
                {
                  "TableVersionLabel": "Scope of the group: “entity-by-entity”"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 40.02",
              "nodes": [
                {
                  "TableVersionLabel": "Scope of the group: \"instrument-by-instrument\""
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 41.01",
              "nodes": [
                {
                  "TableVersionLabel": "Fair value hierarchy: financial instruments at amortised cost"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 41.02",
              "nodes": [
                {
                  "TableVersionLabel": "Use of the Fair Value Option"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 42.00",
              "nodes": [
                {
                  "TableVersionLabel": "Tangible and intangible assets: carrying amount"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 43.00",
              "nodes": [
                {
                  "TableVersionLabel": "Provisions"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 44.01",
              "nodes": [
                {
                  "TableVersionLabel": "Components of net defined benefit plan assets and liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 44.02",
              "nodes": [
                {
                  "TableVersionLabel": "Movements in defined benefit plans and employee benefits"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 44.03",
              "nodes": [
                {
                  "TableVersionLabel": "Memo items [related to staff expenses]"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 45.01",
              "nodes": [
                {
                  "TableVersionLabel": "Gains and losses on financial assets and liabilities designated at fair value through profit or loss by accounting portfolio"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 45.02",
              "nodes": [
                {
                  "TableVersionLabel": "Gains or losses on derecognition of non-financial assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 45.03",
              "nodes": [
                {
                  "TableVersionLabel": "Other operating income and expenses"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 46.00",
              "nodes": [
                {
                  "TableVersionLabel": "Statement of changes in equity"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "General Information - FINREP",
          "nodes": [
            {
              "TemplateCode": "F 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (FINREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "FINREP9_Ind_GAAP",
      "nodes": [
        {
          "TemplateGrouping": "FINREP part 1",
          "nodes": [
            {
              "TemplateCode": "F 01.01",
              "nodes": [
                {
                  "TableVersionLabel": "Balance Sheet Statement [Statement of Financial Position]: Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 01.02",
              "nodes": [
                {
                  "TableVersionLabel": "Balance Sheet Statement [Statement of Financial Position]: Liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 01.03",
              "nodes": [
                {
                  "TableVersionLabel": "Balance Sheet Statement [Statement of Financial Position]: Equity"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 02.00",
              "nodes": [
                {
                  "TableVersionLabel": "Statement of profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 03.00",
              "nodes": [
                {
                  "TableVersionLabel": "Statement of comprehensive income"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets held for trading"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.02.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: non-trading financial assets mandatorily at fair value through profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.02.2",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets designated at fair value through profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.03.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets at fair value through other comprehensive income"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.04.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets at amortised cost"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.05",
              "nodes": [
                {
                  "TableVersionLabel": "Subordinated financial assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 05.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of non-trading loans and advances by product: Loan and advances other than held for trading by product"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 06.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of non-trading loans and advances to non-financial corporations by NACE codes"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 07.01",
              "nodes": [
                {
                  "TableVersionLabel": "Financial assets subject to impairment that are past due"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 08.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial liabilities by product and by counterparty (a)"
                },
                {
                  "TableVersionLabel": "Breakdown of financial liabilities by product and by counterparty (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 08.02",
              "nodes": [
                {
                  "TableVersionLabel": "Subordinated liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 09.01.1",
              "nodes": [
                {
                  "TableVersionLabel": "Off-balance sheet exposures : Loan commitments, financial guarantees and other commitments given"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 09.02",
              "nodes": [
                {
                  "TableVersionLabel": "Loan commitments, financial guarantees and other commitments received"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 10.00",
              "nodes": [
                {
                  "TableVersionLabel": "Derivatives: Trading and economic hedges"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.01",
              "nodes": [
                {
                  "TableVersionLabel": "Derivatives - Hedge accounting: Breakdown by type of risk and type of hedge"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.03",
              "nodes": [
                {
                  "TableVersionLabel": "Non-derivative hedging instruments: Breakdown by accounting portfolio and type of hedge"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.04",
              "nodes": [
                {
                  "TableVersionLabel": "Hedged items in fair value hedges"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 12.01",
              "nodes": [
                {
                  "TableVersionLabel": "Movements in allowances and provisions for credit losses (I)"
                },
                {
                  "TableVersionLabel": "Movements in allowances and provisions for credit losses (II)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 12.02",
              "nodes": [
                {
                  "TableVersionLabel": "Transfers between impairment stages (gross basis presentation)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 13.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of collateral and guarantees by loans and advances other than held for trading"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 13.02",
              "nodes": [
                {
                  "TableVersionLabel": "Collateral obtained by taking possession during the period (held at the reporting date)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 13.03",
              "nodes": [
                {
                  "TableVersionLabel": "Collateral obtained by taking possession [tangible assets] accumulated"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 14.00",
              "nodes": [
                {
                  "TableVersionLabel": "Fair value hierarchy: financial instruments at fair value"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 15.00",
              "nodes": [
                {
                  "TableVersionLabel": "Derecognition and financial liabilities associated with transferred financial assets: Derivatives, Deposits, Debt securities issued, Other financial liabilities"
                },
                {
                  "TableVersionLabel": "Derecognition and financial liabilities associated with transferred financial assets: Equity instruments, debt securities, loans and advances"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Interest income and expenses by instrument and counterparty sector (a)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.02",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on derecognition of financial assets and liabilities not measured at fair value through profit or loss by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.03",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on financial assets and liabilities held for trading and trading financial assets and trading financial liabilities by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.04",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on financial assets and liabilities held for trading and trading financial assets and trading financial liabilities by risk"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.04.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on non-trading financial assets mandatorily at fair value through profit or loss by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.05",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on financial assets and liabilities designated at fair value through profit or loss by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.06",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains and losses from hedge accounting"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.07",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Impairment on non-financial assets (a)"
                },
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Impairment on non-financial assets (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 17.01",
              "nodes": [
                {
                  "TableVersionLabel": "Reconciliation between IFRS and CRR scope of consolidation: Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 17.02",
              "nodes": [
                {
                  "TableVersionLabel": "Reconciliation between IFRS and CRR scope of consolidation: Off-balance sheet exposures - loan commitments, financial guarantees and other commitments given"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 17.03",
              "nodes": [
                {
                  "TableVersionLabel": "Reconciliation between IFRS and CRR scope of consolidation: Liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 18.00",
              "nodes": [
                {
                  "TableVersionLabel": "Information on performing and non-performing exposures (I)"
                },
                {
                  "TableVersionLabel": "Information on performing and non-performing exposures (II)"
                },
                {
                  "TableVersionLabel": "Information on performing and non-performing exposures (III)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 19.00",
              "nodes": [
                {
                  "TableVersionLabel": "Information forborn exposures (I)"
                },
                {
                  "TableVersionLabel": "Information forborn exposures (II)"
                },
                {
                  "TableVersionLabel": "Information forborn exposures (III)"
                },
                {
                  "TableVersionLabel": "Information forborn exposures (IV)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 1 (GAAP only)",
          "nodes": [
            {
              "TemplateCode": "F 04.06",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: trading financial assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.07",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: non-trading non-derivative financial assets measured at fair value through profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.08",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: non-trading non-derivative financial assets measured at fair value to equity"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.09",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: non-trading non-derivative financial assets measured at a cost-based method"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.10",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: other non-trading non-derivative financial assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 07.02",
              "nodes": [
                {
                  "TableVersionLabel": "Financial assets subject to impairment that are past due under national GAAP"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 09.01",
              "nodes": [
                {
                  "TableVersionLabel": "Off-balance sheet exposures under national GAAP: Loan commitments, financial guarantees and other commitments given"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.02",
              "nodes": [
                {
                  "TableVersionLabel": "Derivatives - Hedge accounting under National GAAP: Breakdown by type of risk"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.03.1",
              "nodes": [
                {
                  "TableVersionLabel": "Non-derivative hedging instruments under national GAAP: breakdown by accounting portfolio"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 12.00",
              "nodes": [
                {
                  "TableVersionLabel": "Movements in allowances for credit losses and impairment of equity instruments under national GAAP"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 2",
          "nodes": [
            {
              "TemplateCode": "F 20.01",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of assets by location of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.02",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of liabilities by location of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.03",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of main income statement items by location of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.04",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of assets by residence of the counterparty"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.05",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of off-balance sheet items subject to credit risk by residence of the counterparty (a)"
                },
                {
                  "TableVersionLabel": "Geographical breakdown of off-balance sheet items subject to credit risk by residence of the counterparty (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.06",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of liabilities by residence of the counterparty"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.07.1",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown by residence of the counterparty of loans and advances other than held ofr trading to non-financial corporations by NACE codes"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 21.00",
              "nodes": [
                {
                  "TableVersionLabel": "Tangible and intangible assets: assets subject to operating lease"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 22.01",
              "nodes": [
                {
                  "TableVersionLabel": "Fee and commission income and expenses by activity"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 22.02",
              "nodes": [
                {
                  "TableVersionLabel": "Assets involved in the services provided"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 3",
          "nodes": [
            {
              "TemplateCode": "F 30.01",
              "nodes": [
                {
                  "TableVersionLabel": "Interests in unconsolidated structured entities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 30.02",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of interests in unconsolidated structured entities by nature of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 31.01",
              "nodes": [
                {
                  "TableVersionLabel": "Related parties: amounts payable to and amounts receivable from"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 31.02",
              "nodes": [
                {
                  "TableVersionLabel": "Related parties: expenses and income generated by transactions with"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 4",
          "nodes": [
            {
              "TemplateCode": "F 40.01",
              "nodes": [
                {
                  "TableVersionLabel": "Scope of the group: “entity-by-entity”"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 40.02",
              "nodes": [
                {
                  "TableVersionLabel": "Scope of the group: \"instrument-by-instrument\""
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 41.01",
              "nodes": [
                {
                  "TableVersionLabel": "Fair value hierarchy: financial instruments at amortised cost"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 41.02",
              "nodes": [
                {
                  "TableVersionLabel": "Use of the Fair Value Option"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 42.00",
              "nodes": [
                {
                  "TableVersionLabel": "Tangible and intangible assets: carrying amount"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 43.00",
              "nodes": [
                {
                  "TableVersionLabel": "Provisions"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 44.01",
              "nodes": [
                {
                  "TableVersionLabel": "Components of net defined benefit plan assets and liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 44.02",
              "nodes": [
                {
                  "TableVersionLabel": "Movements in defined benefit plans and employee benefits"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 44.03",
              "nodes": [
                {
                  "TableVersionLabel": "Memo items [related to staff expenses]"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 45.01",
              "nodes": [
                {
                  "TableVersionLabel": "Gains and losses on financial assets and liabilities designated at fair value through profit or loss by accounting portfolio"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 45.02",
              "nodes": [
                {
                  "TableVersionLabel": "Gains or losses on derecognition of non-financial assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 45.03",
              "nodes": [
                {
                  "TableVersionLabel": "Other operating income and expenses"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 46.00",
              "nodes": [
                {
                  "TableVersionLabel": "Statement of changes in equity"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "General Information - FINREP",
          "nodes": [
            {
              "TemplateCode": "F 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (FINREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "FINREP9_Ind_IFRS",
      "nodes": [
        {
          "TemplateGrouping": "FINREP part 1",
          "nodes": [
            {
              "TemplateCode": "F 01.01",
              "nodes": [
                {
                  "TableVersionLabel": "Balance Sheet Statement [Statement of Financial Position]: Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 01.02",
              "nodes": [
                {
                  "TableVersionLabel": "Balance Sheet Statement [Statement of Financial Position]: Liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 01.03",
              "nodes": [
                {
                  "TableVersionLabel": "Balance Sheet Statement [Statement of Financial Position]: Equity"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 02.00",
              "nodes": [
                {
                  "TableVersionLabel": "Statement of profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 03.00",
              "nodes": [
                {
                  "TableVersionLabel": "Statement of comprehensive income"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets held for trading"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.02.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: non-trading financial assets mandatorily at fair value through profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.02.2",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets designated at fair value through profit or loss"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.03.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets at fair value through other comprehensive income"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.04.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial assets by instrument and by counterparty sector: financial assets at amortised cost"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 04.05",
              "nodes": [
                {
                  "TableVersionLabel": "Subordinated financial assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 05.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of non-trading loans and advances by product: Loan and advances other than held for trading by product"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 06.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of non-trading loans and advances to non-financial corporations by NACE codes"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 07.01",
              "nodes": [
                {
                  "TableVersionLabel": "Financial assets subject to impairment that are past due"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 08.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of financial liabilities by product and by counterparty (a)"
                },
                {
                  "TableVersionLabel": "Breakdown of financial liabilities by product and by counterparty (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 08.02",
              "nodes": [
                {
                  "TableVersionLabel": "Subordinated liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 09.01.1",
              "nodes": [
                {
                  "TableVersionLabel": "Off-balance sheet exposures : Loan commitments, financial guarantees and other commitments given"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 09.02",
              "nodes": [
                {
                  "TableVersionLabel": "Loan commitments, financial guarantees and other commitments received"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 10.00",
              "nodes": [
                {
                  "TableVersionLabel": "Derivatives: Trading and economic hedges"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.01",
              "nodes": [
                {
                  "TableVersionLabel": "Derivatives - Hedge accounting: Breakdown by type of risk and type of hedge"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.03",
              "nodes": [
                {
                  "TableVersionLabel": "Non-derivative hedging instruments: Breakdown by accounting portfolio and type of hedge"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 11.04",
              "nodes": [
                {
                  "TableVersionLabel": "Hedged items in fair value hedges"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 12.01",
              "nodes": [
                {
                  "TableVersionLabel": "Movements in allowances and provisions for credit losses (I)"
                },
                {
                  "TableVersionLabel": "Movements in allowances and provisions for credit losses (II)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 12.02",
              "nodes": [
                {
                  "TableVersionLabel": "Transfers between impairment stages (gross basis presentation)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 13.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of collateral and guarantees by loans and advances other than held for trading"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 13.02",
              "nodes": [
                {
                  "TableVersionLabel": "Collateral obtained by taking possession during the period (held at the reporting date)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 13.03",
              "nodes": [
                {
                  "TableVersionLabel": "Collateral obtained by taking possession [tangible assets] accumulated"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 14.00",
              "nodes": [
                {
                  "TableVersionLabel": "Fair value hierarchy: financial instruments at fair value"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 15.00",
              "nodes": [
                {
                  "TableVersionLabel": "Derecognition and financial liabilities associated with transferred financial assets: Derivatives, Deposits, Debt securities issued, Other financial liabilities"
                },
                {
                  "TableVersionLabel": "Derecognition and financial liabilities associated with transferred financial assets: Equity instruments, debt securities, loans and advances"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.01",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Interest income and expenses by instrument and counterparty sector (a)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.02",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on derecognition of financial assets and liabilities not measured at fair value through profit or loss by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.03",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on financial assets and liabilities held for trading and trading financial assets and trading financial liabilities by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.04",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on financial assets and liabilities held for trading and trading financial assets and trading financial liabilities by risk"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.04.1",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on non-trading financial assets mandatorily at fair value through profit or loss by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.05",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains or losses on financial assets and liabilities designated at fair value through profit or loss by instrument"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.06",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Gains and losses from hedge accounting"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 16.07",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Impairment on non-financial assets (a)"
                },
                {
                  "TableVersionLabel": "Breakdown of selected statement of profit or loss items: Impairment on non-financial assets (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 17.01",
              "nodes": [
                {
                  "TableVersionLabel": "Reconciliation between IFRS and CRR scope of consolidation: Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 17.02",
              "nodes": [
                {
                  "TableVersionLabel": "Reconciliation between IFRS and CRR scope of consolidation: Off-balance sheet exposures - loan commitments, financial guarantees and other commitments given"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 17.03",
              "nodes": [
                {
                  "TableVersionLabel": "Reconciliation between IFRS and CRR scope of consolidation: Liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 18.00",
              "nodes": [
                {
                  "TableVersionLabel": "Information on performing and non-performing exposures (I)"
                },
                {
                  "TableVersionLabel": "Information on performing and non-performing exposures (II)"
                },
                {
                  "TableVersionLabel": "Information on performing and non-performing exposures (III)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 19.00",
              "nodes": [
                {
                  "TableVersionLabel": "Information forborn exposures (I)"
                },
                {
                  "TableVersionLabel": "Information forborn exposures (II)"
                },
                {
                  "TableVersionLabel": "Information forborn exposures (III)"
                },
                {
                  "TableVersionLabel": "Information forborn exposures (IV)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 2",
          "nodes": [
            {
              "TemplateCode": "F 20.01",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of assets by location of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.02",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of liabilities by location of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.03",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of main income statement items by location of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.04",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of assets by residence of the counterparty"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.05",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of off-balance sheet items subject to credit risk by residence of the counterparty (a)"
                },
                {
                  "TableVersionLabel": "Geographical breakdown of off-balance sheet items subject to credit risk by residence of the counterparty (b)"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.06",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown of liabilities by residence of the counterparty"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 20.07.1",
              "nodes": [
                {
                  "TableVersionLabel": "Geographical breakdown by residence of the counterparty of loans and advances other than held ofr trading to non-financial corporations by NACE codes"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 21.00",
              "nodes": [
                {
                  "TableVersionLabel": "Tangible and intangible assets: assets subject to operating lease"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 22.01",
              "nodes": [
                {
                  "TableVersionLabel": "Fee and commission income and expenses by activity"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 22.02",
              "nodes": [
                {
                  "TableVersionLabel": "Assets involved in the services provided"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 3",
          "nodes": [
            {
              "TemplateCode": "F 30.01",
              "nodes": [
                {
                  "TableVersionLabel": "Interests in unconsolidated structured entities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 30.02",
              "nodes": [
                {
                  "TableVersionLabel": "Breakdown of interests in unconsolidated structured entities by nature of the activities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 31.01",
              "nodes": [
                {
                  "TableVersionLabel": "Related parties: amounts payable to and amounts receivable from"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 31.02",
              "nodes": [
                {
                  "TableVersionLabel": "Related parties: expenses and income generated by transactions with"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "FINREP part 4",
          "nodes": [
            {
              "TemplateCode": "F 40.01",
              "nodes": [
                {
                  "TableVersionLabel": "Scope of the group: “entity-by-entity”"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 40.02",
              "nodes": [
                {
                  "TableVersionLabel": "Scope of the group: \"instrument-by-instrument\""
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 41.01",
              "nodes": [
                {
                  "TableVersionLabel": "Fair value hierarchy: financial instruments at amortised cost"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 41.02",
              "nodes": [
                {
                  "TableVersionLabel": "Use of the Fair Value Option"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 42.00",
              "nodes": [
                {
                  "TableVersionLabel": "Tangible and intangible assets: carrying amount"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 43.00",
              "nodes": [
                {
                  "TableVersionLabel": "Provisions"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 44.01",
              "nodes": [
                {
                  "TableVersionLabel": "Components of net defined benefit plan assets and liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 44.02",
              "nodes": [
                {
                  "TableVersionLabel": "Movements in defined benefit plans and employee benefits"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 44.03",
              "nodes": [
                {
                  "TableVersionLabel": "Memo items [related to staff expenses]"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 45.01",
              "nodes": [
                {
                  "TableVersionLabel": "Gains and losses on financial assets and liabilities designated at fair value through profit or loss by accounting portfolio"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 45.02",
              "nodes": [
                {
                  "TableVersionLabel": "Gains or losses on derecognition of non-financial assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 45.03",
              "nodes": [
                {
                  "TableVersionLabel": "Other operating income and expenses"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "F 46.00",
              "nodes": [
                {
                  "TableVersionLabel": "Statement of changes in equity"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "General Information - FINREP",
          "nodes": [
            {
              "TemplateCode": "F 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (FINREP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "FP_Con",
      "nodes": [
        {
          "TemplateGrouping": "Funding templates. Section1",
          "nodes": [
            {
              "TemplateCode": "P 01.01",
              "nodes": [
                {
                  "TableVersionLabel": "Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 01.02",
              "nodes": [
                {
                  "TableVersionLabel": "Liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 01.03",
              "nodes": [
                {
                  "TableVersionLabel": "Forecast of Liquidity Ratios"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Funding templates. Section2",
          "nodes": [
            {
              "TemplateCode": "P 02.01",
              "nodes": [
                {
                  "TableVersionLabel": "Insured and uninsured deposits and uninsured deposit-like financial instruments"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.02",
              "nodes": [
                {
                  "TableVersionLabel": "Public sector sources of funding"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.03",
              "nodes": [
                {
                  "TableVersionLabel": "Innovative funding structures"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.04",
              "nodes": [
                {
                  "TableVersionLabel": "Pricing: Loan Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.05",
              "nodes": [
                {
                  "TableVersionLabel": "Pricing: Deposit Liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.06",
              "nodes": [
                {
                  "TableVersionLabel": "Structural currency mismatches"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.07",
              "nodes": [
                {
                  "TableVersionLabel": "Loan Assets Acquisitions, Run-Offs and Disposals Plans"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.08",
              "nodes": [
                {
                  "TableVersionLabel": "Deposit Liabilities Acquisition and Disposal Plans"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Funding templates. Section3",
          "nodes": [
            {
              "TemplateCode": "P 03.00",
              "nodes": [
                {
                  "TableVersionLabel": "Consolidation perimeter"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "General Information - FP",
          "nodes": [
            {
              "TemplateCode": "P 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (FP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },
    {
      "Entrypoint": "FP_Ind",
      "nodes": [
        {
          "TemplateGrouping": "Funding templates. Section1",
          "nodes": [
            {
              "TemplateCode": "P 01.01",
              "nodes": [
                {
                  "TableVersionLabel": "Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 01.02",
              "nodes": [
                {
                  "TableVersionLabel": "Liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 01.03",
              "nodes": [
                {
                  "TableVersionLabel": "Forecast of Liquidity Ratios"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Funding templates. Section2",
          "nodes": [
            {
              "TemplateCode": "P 02.01",
              "nodes": [
                {
                  "TableVersionLabel": "Insured and uninsured deposits and uninsured deposit-like financial instruments"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.02",
              "nodes": [
                {
                  "TableVersionLabel": "Public sector sources of funding"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.03",
              "nodes": [
                {
                  "TableVersionLabel": "Innovative funding structures"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.04",
              "nodes": [
                {
                  "TableVersionLabel": "Pricing: Loan Assets"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.05",
              "nodes": [
                {
                  "TableVersionLabel": "Pricing: Deposit Liabilities"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.06",
              "nodes": [
                {
                  "TableVersionLabel": "Structural currency mismatches"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.07",
              "nodes": [
                {
                  "TableVersionLabel": "Loan Assets Acquisitions, Run-Offs and Disposals Plans"
                }
              ],
              "collapsed": true
            },
            {
              "TemplateCode": "P 02.08",
              "nodes": [
                {
                  "TableVersionLabel": "Deposit Liabilities Acquisition and Disposal Plans"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "Funding templates. Section3",
          "nodes": [
            {
              "TemplateCode": "P 03.00",
              "nodes": [
                {
                  "TableVersionLabel": "Consolidation perimeter"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "TemplateGrouping": "General Information - FP",
          "nodes": [
            {
              "TemplateCode": "P 00.01",
              "nodes": [
                {
                  "TableVersionLabel": "Nature of Report (FP)"
                }
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    }
  ];


  subMenuCls = "nav nav-second-level ";


  ngOnInit(): void {
   
      //this.menuService.getUser().then((user: any) => {
      //  this.user = user;
      //})
  }

}

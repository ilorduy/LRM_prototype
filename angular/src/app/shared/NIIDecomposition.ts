import { Component } from '@angular/core';

export class NIIDecomposition {
    interest_income = 0;
    interest_cost = 0;
    Net_interest_rate_income = 0;
    marginal_contribution_assets_interest = 0;
    marginal_contribution_assets_liquidity = 0;
    total_marginal_contribution_Assets = 0;
    marginal_contribution_interest = 0;
    marginal_contribution_liquidity = 0;
    total_marginal_contribution_el = 0;
    total_marginal_contribution = 0;
    Structural_Contribution = 0;
    Structural_Contribution_interest = 0;
    Structural_Contribution_Liquidity = 0;

    clear(): void {
        this.interest_income = 0;
        this.interest_cost = 0;
        this.Net_interest_rate_income = 0;
        this.marginal_contribution_assets_interest = 0;
        this.marginal_contribution_assets_liquidity = 0;
        this.total_marginal_contribution_Assets = 0;
        this.marginal_contribution_interest = 0;
        this.marginal_contribution_liquidity = 0;
        this.total_marginal_contribution_el = 0;
        this.total_marginal_contribution = 0;
        this.Structural_Contribution = 0;
        this.Structural_Contribution_interest = 0;
        this.Structural_Contribution_Liquidity = 0;
    }

}

export class Column {
    col_name: string;
    col_id: string;
    col_width: number;
    col_data_type: string;

    parse(data): void {
        // tslint:disable-next-line:forin
        for (const k in data) {
            this[k] = data[k] === undefined || data[k] == null ? null : data[k];
        }
    }
}

export class Row {
    act_vol: number;
    avg_fund_rate: number;
    avg_int_rate: number;
    avg_liq_spread: number;
    avg_vol: number;
    balance_position: string;
    balance_side: string;
    costs: number;
    id: number;
    init_maturity: number;
    int_rate: number;
    marg_cont_int: number;
    marg_cont_liq: number;
    state: string;
    total_margin_cont: number;
    trans_date: Date;

    parse(data): void {
        // tslint:disable-next-line:forin
        for (const k in data) {
            this[k] = data[k] === undefined || data[k] == null ? null : data[k];
        }
    }
}

export const Type_Column = {
    NUMBER: 'NUMBER',
    DATE: 'DATE',
    STRING: 'STRING',
}

export class CashFlow {
    columns: Array<Column>;
    rows: Array<Row>

    parse(data): void {
        // tslint:disable-next-line:forin
        for (const k in data) {
            this[k] = data[k] === undefined || data[k] == null ? null : data[k];
        }
    }
}

export class HannaData {
    RetCode: number;
    RetMessage: string;
    DetailsMessage: string;
    CashFlow: CashFlow;

    parse(data): void {
        // tslint:disable-next-line:forin
        for (const k in data) {
            this[k] = data[k] === undefined || data[k] == null ? null : data[k];
        }
    }
}

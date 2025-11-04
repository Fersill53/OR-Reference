export interface Item {
    name: string;
    notes?: string;
    qty?: number;
}

export interface Procedure {
    id: string;
    name: string;
    service: 'Ortho' | 'Neuro' | 'General' | 'Plastics' | 'ENT' | 'Gyn' | 'Urology' | 'Vascular' | 'Cardio' | 'Other';
    position?: string;
    anesthesia?: string;
    roomSetup?: string[];
    drapes?: Item[];
    instruments?: Item[];
    supplies?: Item[];
    medication?: Item[];
    sutures?: Item[];
    dressings?: Item[];
    notes?: string[];
    tags?: string[];

}
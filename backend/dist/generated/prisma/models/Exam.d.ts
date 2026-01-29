import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExamModel = runtime.Types.Result.DefaultSelection<Prisma.$ExamPayload>;
export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null;
    _avg: ExamAvgAggregateOutputType | null;
    _sum: ExamSumAggregateOutputType | null;
    _min: ExamMinAggregateOutputType | null;
    _max: ExamMaxAggregateOutputType | null;
};
export type ExamAvgAggregateOutputType = {
    id: number | null;
    patientId: number | null;
};
export type ExamSumAggregateOutputType = {
    id: number | null;
    patientId: number | null;
};
export type ExamMinAggregateOutputType = {
    id: number | null;
    examDescription: string | null;
    examDate: string | null;
    existingExam: string | null;
    createdAt: Date | null;
    patientId: number | null;
};
export type ExamMaxAggregateOutputType = {
    id: number | null;
    examDescription: string | null;
    examDate: string | null;
    existingExam: string | null;
    createdAt: Date | null;
    patientId: number | null;
};
export type ExamCountAggregateOutputType = {
    id: number;
    examDescription: number;
    examDate: number;
    existingExam: number;
    createdAt: number;
    patientId: number;
    _all: number;
};
export type ExamAvgAggregateInputType = {
    id?: true;
    patientId?: true;
};
export type ExamSumAggregateInputType = {
    id?: true;
    patientId?: true;
};
export type ExamMinAggregateInputType = {
    id?: true;
    examDescription?: true;
    examDate?: true;
    existingExam?: true;
    createdAt?: true;
    patientId?: true;
};
export type ExamMaxAggregateInputType = {
    id?: true;
    examDescription?: true;
    examDate?: true;
    existingExam?: true;
    createdAt?: true;
    patientId?: true;
};
export type ExamCountAggregateInputType = {
    id?: true;
    examDescription?: true;
    examDate?: true;
    existingExam?: true;
    createdAt?: true;
    patientId?: true;
    _all?: true;
};
export type ExamAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    cursor?: Prisma.ExamWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExamCountAggregateInputType;
    _avg?: ExamAvgAggregateInputType;
    _sum?: ExamSumAggregateInputType;
    _min?: ExamMinAggregateInputType;
    _max?: ExamMaxAggregateInputType;
};
export type GetExamAggregateType<T extends ExamAggregateArgs> = {
    [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExam[P]> : Prisma.GetScalarType<T[P], AggregateExam[P]>;
};
export type ExamGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithAggregationInput | Prisma.ExamOrderByWithAggregationInput[];
    by: Prisma.ExamScalarFieldEnum[] | Prisma.ExamScalarFieldEnum;
    having?: Prisma.ExamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExamCountAggregateInputType | true;
    _avg?: ExamAvgAggregateInputType;
    _sum?: ExamSumAggregateInputType;
    _min?: ExamMinAggregateInputType;
    _max?: ExamMaxAggregateInputType;
};
export type ExamGroupByOutputType = {
    id: number;
    examDescription: string;
    examDate: string;
    existingExam: string;
    createdAt: Date;
    patientId: number;
    _count: ExamCountAggregateOutputType | null;
    _avg: ExamAvgAggregateOutputType | null;
    _sum: ExamSumAggregateOutputType | null;
    _min: ExamMinAggregateOutputType | null;
    _max: ExamMaxAggregateOutputType | null;
};
type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExamGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExamGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExamGroupByOutputType[P]>;
}>>;
export type ExamWhereInput = {
    AND?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    OR?: Prisma.ExamWhereInput[];
    NOT?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    id?: Prisma.IntFilter<"Exam"> | number;
    examDescription?: Prisma.StringFilter<"Exam"> | string;
    examDate?: Prisma.StringFilter<"Exam"> | string;
    existingExam?: Prisma.StringFilter<"Exam"> | string;
    createdAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    patientId?: Prisma.IntFilter<"Exam"> | number;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
};
export type ExamOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    examDescription?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    existingExam?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    patient?: Prisma.PatientOrderByWithRelationInput;
};
export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    existingExam?: string;
    AND?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    OR?: Prisma.ExamWhereInput[];
    NOT?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    examDescription?: Prisma.StringFilter<"Exam"> | string;
    examDate?: Prisma.StringFilter<"Exam"> | string;
    createdAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    patientId?: Prisma.IntFilter<"Exam"> | number;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
}, "id" | "existingExam">;
export type ExamOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    examDescription?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    existingExam?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    _count?: Prisma.ExamCountOrderByAggregateInput;
    _avg?: Prisma.ExamAvgOrderByAggregateInput;
    _max?: Prisma.ExamMaxOrderByAggregateInput;
    _min?: Prisma.ExamMinOrderByAggregateInput;
    _sum?: Prisma.ExamSumOrderByAggregateInput;
};
export type ExamScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExamScalarWhereWithAggregatesInput | Prisma.ExamScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExamScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExamScalarWhereWithAggregatesInput | Prisma.ExamScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Exam"> | number;
    examDescription?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    examDate?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    existingExam?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Exam"> | Date | string;
    patientId?: Prisma.IntWithAggregatesFilter<"Exam"> | number;
};
export type ExamCreateInput = {
    examDescription: string;
    examDate: string;
    existingExam: string;
    createdAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutExamsInput;
};
export type ExamUncheckedCreateInput = {
    id?: number;
    examDescription: string;
    examDate: string;
    existingExam: string;
    createdAt?: Date | string;
    patientId: number;
};
export type ExamUpdateInput = {
    examDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.StringFieldUpdateOperationsInput | string;
    existingExam?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutExamsNestedInput;
};
export type ExamUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    examDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.StringFieldUpdateOperationsInput | string;
    existingExam?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExamCreateManyInput = {
    id?: number;
    examDescription: string;
    examDate: string;
    existingExam: string;
    createdAt?: Date | string;
    patientId: number;
};
export type ExamUpdateManyMutationInput = {
    examDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.StringFieldUpdateOperationsInput | string;
    existingExam?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    examDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.StringFieldUpdateOperationsInput | string;
    existingExam?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExamListRelationFilter = {
    every?: Prisma.ExamWhereInput;
    some?: Prisma.ExamWhereInput;
    none?: Prisma.ExamWhereInput;
};
export type ExamOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExamCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    examDescription?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    existingExam?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
};
export type ExamAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
};
export type ExamMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    examDescription?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    existingExam?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
};
export type ExamMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    examDescription?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    existingExam?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
};
export type ExamSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
};
export type ExamCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutPatientInput, Prisma.ExamUncheckedCreateWithoutPatientInput> | Prisma.ExamCreateWithoutPatientInput[] | Prisma.ExamUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutPatientInput | Prisma.ExamCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.ExamCreateManyPatientInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutPatientInput, Prisma.ExamUncheckedCreateWithoutPatientInput> | Prisma.ExamCreateWithoutPatientInput[] | Prisma.ExamUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutPatientInput | Prisma.ExamCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.ExamCreateManyPatientInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutPatientInput, Prisma.ExamUncheckedCreateWithoutPatientInput> | Prisma.ExamCreateWithoutPatientInput[] | Prisma.ExamUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutPatientInput | Prisma.ExamCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutPatientInput | Prisma.ExamUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.ExamCreateManyPatientInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutPatientInput | Prisma.ExamUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutPatientInput | Prisma.ExamUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutPatientInput, Prisma.ExamUncheckedCreateWithoutPatientInput> | Prisma.ExamCreateWithoutPatientInput[] | Prisma.ExamUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutPatientInput | Prisma.ExamCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutPatientInput | Prisma.ExamUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.ExamCreateManyPatientInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutPatientInput | Prisma.ExamUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutPatientInput | Prisma.ExamUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamCreateWithoutPatientInput = {
    examDescription: string;
    examDate: string;
    existingExam: string;
    createdAt?: Date | string;
};
export type ExamUncheckedCreateWithoutPatientInput = {
    id?: number;
    examDescription: string;
    examDate: string;
    existingExam: string;
    createdAt?: Date | string;
};
export type ExamCreateOrConnectWithoutPatientInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutPatientInput, Prisma.ExamUncheckedCreateWithoutPatientInput>;
};
export type ExamCreateManyPatientInputEnvelope = {
    data: Prisma.ExamCreateManyPatientInput | Prisma.ExamCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type ExamUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.ExamWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamUpdateWithoutPatientInput, Prisma.ExamUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutPatientInput, Prisma.ExamUncheckedCreateWithoutPatientInput>;
};
export type ExamUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.ExamWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutPatientInput, Prisma.ExamUncheckedUpdateWithoutPatientInput>;
};
export type ExamUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.ExamScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyWithoutPatientInput>;
};
export type ExamScalarWhereInput = {
    AND?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
    OR?: Prisma.ExamScalarWhereInput[];
    NOT?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
    id?: Prisma.IntFilter<"Exam"> | number;
    examDescription?: Prisma.StringFilter<"Exam"> | string;
    examDate?: Prisma.StringFilter<"Exam"> | string;
    existingExam?: Prisma.StringFilter<"Exam"> | string;
    createdAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    patientId?: Prisma.IntFilter<"Exam"> | number;
};
export type ExamCreateManyPatientInput = {
    id?: number;
    examDescription: string;
    examDate: string;
    existingExam: string;
    createdAt?: Date | string;
};
export type ExamUpdateWithoutPatientInput = {
    examDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.StringFieldUpdateOperationsInput | string;
    existingExam?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    examDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.StringFieldUpdateOperationsInput | string;
    existingExam?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    examDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.StringFieldUpdateOperationsInput | string;
    existingExam?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    examDescription?: boolean;
    examDate?: boolean;
    existingExam?: boolean;
    createdAt?: boolean;
    patientId?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    examDescription?: boolean;
    examDate?: boolean;
    existingExam?: boolean;
    createdAt?: boolean;
    patientId?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    examDescription?: boolean;
    examDate?: boolean;
    existingExam?: boolean;
    createdAt?: boolean;
    patientId?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectScalar = {
    id?: boolean;
    examDescription?: boolean;
    examDate?: boolean;
    existingExam?: boolean;
    createdAt?: boolean;
    patientId?: boolean;
};
export type ExamOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "examDescription" | "examDate" | "existingExam" | "createdAt" | "patientId", ExtArgs["result"]["exam"]>;
export type ExamInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
};
export type ExamIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
};
export type ExamIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
};
export type $ExamPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Exam";
    objects: {
        patient: Prisma.$PatientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        examDescription: string;
        examDate: string;
        existingExam: string;
        createdAt: Date;
        patientId: number;
    }, ExtArgs["result"]["exam"]>;
    composites: {};
};
export type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExamPayload, S>;
export type ExamCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExamCountAggregateInputType | true;
};
export interface ExamDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Exam'];
        meta: {
            name: 'Exam';
        };
    };
    findUnique<T extends ExamFindUniqueArgs>(args: Prisma.SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExamFindFirstArgs>(args?: Prisma.SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExamFindManyArgs>(args?: Prisma.SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExamCreateArgs>(args: Prisma.SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExamCreateManyArgs>(args?: Prisma.SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExamDeleteArgs>(args: Prisma.SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExamUpdateArgs>(args: Prisma.SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExamDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExamUpdateManyArgs>(args: Prisma.SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExamUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExamUpsertArgs>(args: Prisma.SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExamCountArgs>(args?: Prisma.Subset<T, ExamCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExamCountAggregateOutputType> : number>;
    aggregate<T extends ExamAggregateArgs>(args: Prisma.Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>;
    groupBy<T extends ExamGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExamGroupByArgs['orderBy'];
    } : {
        orderBy?: ExamGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExamFieldRefs;
}
export interface Prisma__ExamClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patient<T extends Prisma.PatientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExamFieldRefs {
    readonly id: Prisma.FieldRef<"Exam", 'Int'>;
    readonly examDescription: Prisma.FieldRef<"Exam", 'String'>;
    readonly examDate: Prisma.FieldRef<"Exam", 'String'>;
    readonly existingExam: Prisma.FieldRef<"Exam", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Exam", 'DateTime'>;
    readonly patientId: Prisma.FieldRef<"Exam", 'Int'>;
}
export type ExamFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where: Prisma.ExamWhereUniqueInput;
};
export type ExamFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where: Prisma.ExamWhereUniqueInput;
};
export type ExamFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    cursor?: Prisma.ExamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
export type ExamFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    cursor?: Prisma.ExamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
export type ExamFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    cursor?: Prisma.ExamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
export type ExamCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamCreateInput, Prisma.ExamUncheckedCreateInput>;
};
export type ExamCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExamCreateManyInput | Prisma.ExamCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExamCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    data: Prisma.ExamCreateManyInput | Prisma.ExamCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExamIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExamUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamUpdateInput, Prisma.ExamUncheckedUpdateInput>;
    where: Prisma.ExamWhereUniqueInput;
};
export type ExamUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyInput>;
    where?: Prisma.ExamWhereInput;
    limit?: number;
};
export type ExamUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyInput>;
    where?: Prisma.ExamWhereInput;
    limit?: number;
    include?: Prisma.ExamIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExamUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateInput, Prisma.ExamUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExamUpdateInput, Prisma.ExamUncheckedUpdateInput>;
};
export type ExamDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where: Prisma.ExamWhereUniqueInput;
};
export type ExamDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
    limit?: number;
};
export type ExamDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
};
export {};

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatientModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientPayload>;
export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null;
    _avg: PatientAvgAggregateOutputType | null;
    _sum: PatientSumAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
};
export type PatientAvgAggregateOutputType = {
    id: number | null;
};
export type PatientSumAggregateOutputType = {
    id: number | null;
};
export type PatientMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    cpf: string | null;
    birthDate: string | null;
    createdAt: Date | null;
};
export type PatientMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    cpf: string | null;
    birthDate: string | null;
    createdAt: Date | null;
};
export type PatientCountAggregateOutputType = {
    id: number;
    name: number;
    cpf: number;
    birthDate: number;
    createdAt: number;
    _all: number;
};
export type PatientAvgAggregateInputType = {
    id?: true;
};
export type PatientSumAggregateInputType = {
    id?: true;
};
export type PatientMinAggregateInputType = {
    id?: true;
    name?: true;
    cpf?: true;
    birthDate?: true;
    createdAt?: true;
};
export type PatientMaxAggregateInputType = {
    id?: true;
    name?: true;
    cpf?: true;
    birthDate?: true;
    createdAt?: true;
};
export type PatientCountAggregateInputType = {
    id?: true;
    name?: true;
    cpf?: true;
    birthDate?: true;
    createdAt?: true;
    _all?: true;
};
export type PatientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithRelationInput | Prisma.PatientOrderByWithRelationInput[];
    cursor?: Prisma.PatientWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientCountAggregateInputType;
    _avg?: PatientAvgAggregateInputType;
    _sum?: PatientSumAggregateInputType;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
};
export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
    [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatient[P]> : Prisma.GetScalarType<T[P], AggregatePatient[P]>;
};
export type PatientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithAggregationInput | Prisma.PatientOrderByWithAggregationInput[];
    by: Prisma.PatientScalarFieldEnum[] | Prisma.PatientScalarFieldEnum;
    having?: Prisma.PatientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientCountAggregateInputType | true;
    _avg?: PatientAvgAggregateInputType;
    _sum?: PatientSumAggregateInputType;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
};
export type PatientGroupByOutputType = {
    id: number;
    name: string;
    cpf: string;
    birthDate: string;
    createdAt: Date;
    _count: PatientCountAggregateOutputType | null;
    _avg: PatientAvgAggregateOutputType | null;
    _sum: PatientSumAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
};
type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientGroupByOutputType[P]>;
}>>;
export type PatientWhereInput = {
    AND?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    OR?: Prisma.PatientWhereInput[];
    NOT?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    id?: Prisma.IntFilter<"Patient"> | number;
    name?: Prisma.StringFilter<"Patient"> | string;
    cpf?: Prisma.StringFilter<"Patient"> | string;
    birthDate?: Prisma.StringFilter<"Patient"> | string;
    createdAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    exams?: Prisma.ExamListRelationFilter;
};
export type PatientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    exams?: Prisma.ExamOrderByRelationAggregateInput;
};
export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    cpf?: string;
    AND?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    OR?: Prisma.PatientWhereInput[];
    NOT?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    name?: Prisma.StringFilter<"Patient"> | string;
    birthDate?: Prisma.StringFilter<"Patient"> | string;
    createdAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    exams?: Prisma.ExamListRelationFilter;
}, "id" | "cpf">;
export type PatientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PatientCountOrderByAggregateInput;
    _avg?: Prisma.PatientAvgOrderByAggregateInput;
    _max?: Prisma.PatientMaxOrderByAggregateInput;
    _min?: Prisma.PatientMinOrderByAggregateInput;
    _sum?: Prisma.PatientSumOrderByAggregateInput;
};
export type PatientScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientScalarWhereWithAggregatesInput | Prisma.PatientScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientScalarWhereWithAggregatesInput | Prisma.PatientScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Patient"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    cpf?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    birthDate?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Patient"> | Date | string;
};
export type PatientCreateInput = {
    name: string;
    cpf: string;
    birthDate: string;
    createdAt?: Date | string;
    exams?: Prisma.ExamCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateInput = {
    id?: number;
    name: string;
    cpf: string;
    birthDate: string;
    createdAt?: Date | string;
    exams?: Prisma.ExamUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exams?: Prisma.ExamUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exams?: Prisma.ExamUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateManyInput = {
    id?: number;
    name: string;
    cpf: string;
    birthDate: string;
    createdAt?: Date | string;
};
export type PatientUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PatientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PatientScalarRelationFilter = {
    is?: Prisma.PatientWhereInput;
    isNot?: Prisma.PatientWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PatientCreateNestedOneWithoutExamsInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutExamsInput, Prisma.PatientUncheckedCreateWithoutExamsInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutExamsInput;
    connect?: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateOneRequiredWithoutExamsNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutExamsInput, Prisma.PatientUncheckedCreateWithoutExamsInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutExamsInput;
    upsert?: Prisma.PatientUpsertWithoutExamsInput;
    connect?: Prisma.PatientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientUpdateToOneWithWhereWithoutExamsInput, Prisma.PatientUpdateWithoutExamsInput>, Prisma.PatientUncheckedUpdateWithoutExamsInput>;
};
export type PatientCreateWithoutExamsInput = {
    name: string;
    cpf: string;
    birthDate: string;
    createdAt?: Date | string;
};
export type PatientUncheckedCreateWithoutExamsInput = {
    id?: number;
    name: string;
    cpf: string;
    birthDate: string;
    createdAt?: Date | string;
};
export type PatientCreateOrConnectWithoutExamsInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutExamsInput, Prisma.PatientUncheckedCreateWithoutExamsInput>;
};
export type PatientUpsertWithoutExamsInput = {
    update: Prisma.XOR<Prisma.PatientUpdateWithoutExamsInput, Prisma.PatientUncheckedUpdateWithoutExamsInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutExamsInput, Prisma.PatientUncheckedCreateWithoutExamsInput>;
    where?: Prisma.PatientWhereInput;
};
export type PatientUpdateToOneWithWhereWithoutExamsInput = {
    where?: Prisma.PatientWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutExamsInput, Prisma.PatientUncheckedUpdateWithoutExamsInput>;
};
export type PatientUpdateWithoutExamsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientUncheckedUpdateWithoutExamsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientCountOutputType = {
    exams: number;
};
export type PatientCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    exams?: boolean | PatientCountOutputTypeCountExamsArgs;
};
export type PatientCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientCountOutputTypeSelect<ExtArgs> | null;
};
export type PatientCountOutputTypeCountExamsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
};
export type PatientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    cpf?: boolean;
    birthDate?: boolean;
    createdAt?: boolean;
    exams?: boolean | Prisma.Patient$examsArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patient"]>;
export type PatientSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    cpf?: boolean;
    birthDate?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["patient"]>;
export type PatientSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    cpf?: boolean;
    birthDate?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["patient"]>;
export type PatientSelectScalar = {
    id?: boolean;
    name?: boolean;
    cpf?: boolean;
    birthDate?: boolean;
    createdAt?: boolean;
};
export type PatientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "cpf" | "birthDate" | "createdAt", ExtArgs["result"]["patient"]>;
export type PatientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    exams?: boolean | Prisma.Patient$examsArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PatientIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PatientIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PatientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Patient";
    objects: {
        exams: Prisma.$ExamPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        cpf: string;
        birthDate: string;
        createdAt: Date;
    }, ExtArgs["result"]["patient"]>;
    composites: {};
};
export type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientPayload, S>;
export type PatientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientCountAggregateInputType | true;
};
export interface PatientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Patient'];
        meta: {
            name: 'Patient';
        };
    };
    findUnique<T extends PatientFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientFindManyArgs>(args?: Prisma.SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientCreateArgs>(args: Prisma.SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatientDeleteArgs>(args: Prisma.SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientUpdateArgs>(args: Prisma.SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatientUpsertArgs>(args: Prisma.SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientCountArgs>(args?: Prisma.Subset<T, PatientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientCountAggregateOutputType> : number>;
    aggregate<T extends PatientAggregateArgs>(args: Prisma.Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>;
    groupBy<T extends PatientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientFieldRefs;
}
export interface Prisma__PatientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    exams<T extends Prisma.Patient$examsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Patient$examsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientFieldRefs {
    readonly id: Prisma.FieldRef<"Patient", 'Int'>;
    readonly name: Prisma.FieldRef<"Patient", 'String'>;
    readonly cpf: Prisma.FieldRef<"Patient", 'String'>;
    readonly birthDate: Prisma.FieldRef<"Patient", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Patient", 'DateTime'>;
}
export type PatientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithRelationInput | Prisma.PatientOrderByWithRelationInput[];
    cursor?: Prisma.PatientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientScalarFieldEnum | Prisma.PatientScalarFieldEnum[];
};
export type PatientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithRelationInput | Prisma.PatientOrderByWithRelationInput[];
    cursor?: Prisma.PatientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientScalarFieldEnum | Prisma.PatientScalarFieldEnum[];
};
export type PatientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithRelationInput | Prisma.PatientOrderByWithRelationInput[];
    cursor?: Prisma.PatientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientScalarFieldEnum | Prisma.PatientScalarFieldEnum[];
};
export type PatientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientCreateInput, Prisma.PatientUncheckedCreateInput>;
};
export type PatientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientCreateManyInput | Prisma.PatientCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    data: Prisma.PatientCreateManyInput | Prisma.PatientCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientUpdateInput, Prisma.PatientUncheckedUpdateInput>;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientUpdateManyMutationInput, Prisma.PatientUncheckedUpdateManyInput>;
    where?: Prisma.PatientWhereInput;
    limit?: number;
};
export type PatientUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientUpdateManyMutationInput, Prisma.PatientUncheckedUpdateManyInput>;
    where?: Prisma.PatientWhereInput;
    limit?: number;
};
export type PatientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateInput, Prisma.PatientUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientUpdateInput, Prisma.PatientUncheckedUpdateInput>;
};
export type PatientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
    limit?: number;
};
export type Patient$examsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
};
export {};

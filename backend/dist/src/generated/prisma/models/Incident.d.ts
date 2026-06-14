import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IncidentModel = runtime.Types.Result.DefaultSelection<Prisma.$IncidentPayload>;
export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null;
    _min: IncidentMinAggregateOutputType | null;
    _max: IncidentMaxAggregateOutputType | null;
};
export type IncidentMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    status: $Enums.IncidentStatus | null;
    priority: $Enums.IncidentPriority | null;
    organizationId: string | null;
    reporterId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type IncidentMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    status: $Enums.IncidentStatus | null;
    priority: $Enums.IncidentPriority | null;
    organizationId: string | null;
    reporterId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type IncidentCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    status: number;
    priority: number;
    organizationId: number;
    reporterId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type IncidentMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    priority?: true;
    organizationId?: true;
    reporterId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type IncidentMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    priority?: true;
    organizationId?: true;
    reporterId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type IncidentCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    priority?: true;
    organizationId?: true;
    reporterId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type IncidentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncidentWhereInput;
    orderBy?: Prisma.IncidentOrderByWithRelationInput | Prisma.IncidentOrderByWithRelationInput[];
    cursor?: Prisma.IncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IncidentCountAggregateInputType;
    _min?: IncidentMinAggregateInputType;
    _max?: IncidentMaxAggregateInputType;
};
export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
    [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIncident[P]> : Prisma.GetScalarType<T[P], AggregateIncident[P]>;
};
export type IncidentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncidentWhereInput;
    orderBy?: Prisma.IncidentOrderByWithAggregationInput | Prisma.IncidentOrderByWithAggregationInput[];
    by: Prisma.IncidentScalarFieldEnum[] | Prisma.IncidentScalarFieldEnum;
    having?: Prisma.IncidentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IncidentCountAggregateInputType | true;
    _min?: IncidentMinAggregateInputType;
    _max?: IncidentMaxAggregateInputType;
};
export type IncidentGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    status: $Enums.IncidentStatus;
    priority: $Enums.IncidentPriority;
    organizationId: string;
    reporterId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: IncidentCountAggregateOutputType | null;
    _min: IncidentMinAggregateOutputType | null;
    _max: IncidentMaxAggregateOutputType | null;
};
type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IncidentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IncidentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IncidentGroupByOutputType[P]>;
}>>;
export type IncidentWhereInput = {
    AND?: Prisma.IncidentWhereInput | Prisma.IncidentWhereInput[];
    OR?: Prisma.IncidentWhereInput[];
    NOT?: Prisma.IncidentWhereInput | Prisma.IncidentWhereInput[];
    id?: Prisma.StringFilter<"Incident"> | string;
    title?: Prisma.StringFilter<"Incident"> | string;
    description?: Prisma.StringFilter<"Incident"> | string;
    status?: Prisma.EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFilter<"Incident"> | $Enums.IncidentPriority;
    organizationId?: Prisma.StringFilter<"Incident"> | string;
    reporterId?: Prisma.StringFilter<"Incident"> | string;
    createdAt?: Prisma.DateTimeFilter<"Incident"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Incident"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    reporter?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type IncidentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    reporterId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    reporter?: Prisma.UserOrderByWithRelationInput;
};
export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.IncidentWhereInput | Prisma.IncidentWhereInput[];
    OR?: Prisma.IncidentWhereInput[];
    NOT?: Prisma.IncidentWhereInput | Prisma.IncidentWhereInput[];
    title?: Prisma.StringFilter<"Incident"> | string;
    description?: Prisma.StringFilter<"Incident"> | string;
    status?: Prisma.EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFilter<"Incident"> | $Enums.IncidentPriority;
    organizationId?: Prisma.StringFilter<"Incident"> | string;
    reporterId?: Prisma.StringFilter<"Incident"> | string;
    createdAt?: Prisma.DateTimeFilter<"Incident"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Incident"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    reporter?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type IncidentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    reporterId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.IncidentCountOrderByAggregateInput;
    _max?: Prisma.IncidentMaxOrderByAggregateInput;
    _min?: Prisma.IncidentMinOrderByAggregateInput;
};
export type IncidentScalarWhereWithAggregatesInput = {
    AND?: Prisma.IncidentScalarWhereWithAggregatesInput | Prisma.IncidentScalarWhereWithAggregatesInput[];
    OR?: Prisma.IncidentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IncidentScalarWhereWithAggregatesInput | Prisma.IncidentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Incident"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Incident"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Incident"> | string;
    status?: Prisma.EnumIncidentStatusWithAggregatesFilter<"Incident"> | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityWithAggregatesFilter<"Incident"> | $Enums.IncidentPriority;
    organizationId?: Prisma.StringWithAggregatesFilter<"Incident"> | string;
    reporterId?: Prisma.StringWithAggregatesFilter<"Incident"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Incident"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Incident"> | Date | string;
};
export type IncidentCreateInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.IncidentStatus;
    priority?: $Enums.IncidentPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutIncidentsInput;
    reporter: Prisma.UserCreateNestedOneWithoutReportedIncidentsInput;
};
export type IncidentUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.IncidentStatus;
    priority?: $Enums.IncidentPriority;
    organizationId: string;
    reporterId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncidentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutIncidentsNestedInput;
    reporter?: Prisma.UserUpdateOneRequiredWithoutReportedIncidentsNestedInput;
};
export type IncidentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncidentCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.IncidentStatus;
    priority?: $Enums.IncidentPriority;
    organizationId: string;
    reporterId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncidentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncidentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncidentListRelationFilter = {
    every?: Prisma.IncidentWhereInput;
    some?: Prisma.IncidentWhereInput;
    none?: Prisma.IncidentWhereInput;
};
export type IncidentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IncidentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    reporterId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IncidentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    reporterId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IncidentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    reporterId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IncidentCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutOrganizationInput, Prisma.IncidentUncheckedCreateWithoutOrganizationInput> | Prisma.IncidentCreateWithoutOrganizationInput[] | Prisma.IncidentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutOrganizationInput | Prisma.IncidentCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.IncidentCreateManyOrganizationInputEnvelope;
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
};
export type IncidentUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutOrganizationInput, Prisma.IncidentUncheckedCreateWithoutOrganizationInput> | Prisma.IncidentCreateWithoutOrganizationInput[] | Prisma.IncidentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutOrganizationInput | Prisma.IncidentCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.IncidentCreateManyOrganizationInputEnvelope;
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
};
export type IncidentUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutOrganizationInput, Prisma.IncidentUncheckedCreateWithoutOrganizationInput> | Prisma.IncidentCreateWithoutOrganizationInput[] | Prisma.IncidentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutOrganizationInput | Prisma.IncidentCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.IncidentUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.IncidentUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.IncidentCreateManyOrganizationInputEnvelope;
    set?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    disconnect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    delete?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    update?: Prisma.IncidentUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.IncidentUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.IncidentUpdateManyWithWhereWithoutOrganizationInput | Prisma.IncidentUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.IncidentScalarWhereInput | Prisma.IncidentScalarWhereInput[];
};
export type IncidentUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutOrganizationInput, Prisma.IncidentUncheckedCreateWithoutOrganizationInput> | Prisma.IncidentCreateWithoutOrganizationInput[] | Prisma.IncidentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutOrganizationInput | Prisma.IncidentCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.IncidentUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.IncidentUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.IncidentCreateManyOrganizationInputEnvelope;
    set?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    disconnect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    delete?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    update?: Prisma.IncidentUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.IncidentUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.IncidentUpdateManyWithWhereWithoutOrganizationInput | Prisma.IncidentUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.IncidentScalarWhereInput | Prisma.IncidentScalarWhereInput[];
};
export type IncidentCreateNestedManyWithoutReporterInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutReporterInput, Prisma.IncidentUncheckedCreateWithoutReporterInput> | Prisma.IncidentCreateWithoutReporterInput[] | Prisma.IncidentUncheckedCreateWithoutReporterInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutReporterInput | Prisma.IncidentCreateOrConnectWithoutReporterInput[];
    createMany?: Prisma.IncidentCreateManyReporterInputEnvelope;
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
};
export type IncidentUncheckedCreateNestedManyWithoutReporterInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutReporterInput, Prisma.IncidentUncheckedCreateWithoutReporterInput> | Prisma.IncidentCreateWithoutReporterInput[] | Prisma.IncidentUncheckedCreateWithoutReporterInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutReporterInput | Prisma.IncidentCreateOrConnectWithoutReporterInput[];
    createMany?: Prisma.IncidentCreateManyReporterInputEnvelope;
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
};
export type IncidentUpdateManyWithoutReporterNestedInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutReporterInput, Prisma.IncidentUncheckedCreateWithoutReporterInput> | Prisma.IncidentCreateWithoutReporterInput[] | Prisma.IncidentUncheckedCreateWithoutReporterInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutReporterInput | Prisma.IncidentCreateOrConnectWithoutReporterInput[];
    upsert?: Prisma.IncidentUpsertWithWhereUniqueWithoutReporterInput | Prisma.IncidentUpsertWithWhereUniqueWithoutReporterInput[];
    createMany?: Prisma.IncidentCreateManyReporterInputEnvelope;
    set?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    disconnect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    delete?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    update?: Prisma.IncidentUpdateWithWhereUniqueWithoutReporterInput | Prisma.IncidentUpdateWithWhereUniqueWithoutReporterInput[];
    updateMany?: Prisma.IncidentUpdateManyWithWhereWithoutReporterInput | Prisma.IncidentUpdateManyWithWhereWithoutReporterInput[];
    deleteMany?: Prisma.IncidentScalarWhereInput | Prisma.IncidentScalarWhereInput[];
};
export type IncidentUncheckedUpdateManyWithoutReporterNestedInput = {
    create?: Prisma.XOR<Prisma.IncidentCreateWithoutReporterInput, Prisma.IncidentUncheckedCreateWithoutReporterInput> | Prisma.IncidentCreateWithoutReporterInput[] | Prisma.IncidentUncheckedCreateWithoutReporterInput[];
    connectOrCreate?: Prisma.IncidentCreateOrConnectWithoutReporterInput | Prisma.IncidentCreateOrConnectWithoutReporterInput[];
    upsert?: Prisma.IncidentUpsertWithWhereUniqueWithoutReporterInput | Prisma.IncidentUpsertWithWhereUniqueWithoutReporterInput[];
    createMany?: Prisma.IncidentCreateManyReporterInputEnvelope;
    set?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    disconnect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    delete?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    connect?: Prisma.IncidentWhereUniqueInput | Prisma.IncidentWhereUniqueInput[];
    update?: Prisma.IncidentUpdateWithWhereUniqueWithoutReporterInput | Prisma.IncidentUpdateWithWhereUniqueWithoutReporterInput[];
    updateMany?: Prisma.IncidentUpdateManyWithWhereWithoutReporterInput | Prisma.IncidentUpdateManyWithWhereWithoutReporterInput[];
    deleteMany?: Prisma.IncidentScalarWhereInput | Prisma.IncidentScalarWhereInput[];
};
export type EnumIncidentStatusFieldUpdateOperationsInput = {
    set?: $Enums.IncidentStatus;
};
export type EnumIncidentPriorityFieldUpdateOperationsInput = {
    set?: $Enums.IncidentPriority;
};
export type IncidentCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.IncidentStatus;
    priority?: $Enums.IncidentPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reporter: Prisma.UserCreateNestedOneWithoutReportedIncidentsInput;
};
export type IncidentUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.IncidentStatus;
    priority?: $Enums.IncidentPriority;
    reporterId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncidentCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.IncidentWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncidentCreateWithoutOrganizationInput, Prisma.IncidentUncheckedCreateWithoutOrganizationInput>;
};
export type IncidentCreateManyOrganizationInputEnvelope = {
    data: Prisma.IncidentCreateManyOrganizationInput | Prisma.IncidentCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type IncidentUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.IncidentWhereUniqueInput;
    update: Prisma.XOR<Prisma.IncidentUpdateWithoutOrganizationInput, Prisma.IncidentUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.IncidentCreateWithoutOrganizationInput, Prisma.IncidentUncheckedCreateWithoutOrganizationInput>;
};
export type IncidentUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.IncidentWhereUniqueInput;
    data: Prisma.XOR<Prisma.IncidentUpdateWithoutOrganizationInput, Prisma.IncidentUncheckedUpdateWithoutOrganizationInput>;
};
export type IncidentUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.IncidentScalarWhereInput;
    data: Prisma.XOR<Prisma.IncidentUpdateManyMutationInput, Prisma.IncidentUncheckedUpdateManyWithoutOrganizationInput>;
};
export type IncidentScalarWhereInput = {
    AND?: Prisma.IncidentScalarWhereInput | Prisma.IncidentScalarWhereInput[];
    OR?: Prisma.IncidentScalarWhereInput[];
    NOT?: Prisma.IncidentScalarWhereInput | Prisma.IncidentScalarWhereInput[];
    id?: Prisma.StringFilter<"Incident"> | string;
    title?: Prisma.StringFilter<"Incident"> | string;
    description?: Prisma.StringFilter<"Incident"> | string;
    status?: Prisma.EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFilter<"Incident"> | $Enums.IncidentPriority;
    organizationId?: Prisma.StringFilter<"Incident"> | string;
    reporterId?: Prisma.StringFilter<"Incident"> | string;
    createdAt?: Prisma.DateTimeFilter<"Incident"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Incident"> | Date | string;
};
export type IncidentCreateWithoutReporterInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.IncidentStatus;
    priority?: $Enums.IncidentPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutIncidentsInput;
};
export type IncidentUncheckedCreateWithoutReporterInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.IncidentStatus;
    priority?: $Enums.IncidentPriority;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncidentCreateOrConnectWithoutReporterInput = {
    where: Prisma.IncidentWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncidentCreateWithoutReporterInput, Prisma.IncidentUncheckedCreateWithoutReporterInput>;
};
export type IncidentCreateManyReporterInputEnvelope = {
    data: Prisma.IncidentCreateManyReporterInput | Prisma.IncidentCreateManyReporterInput[];
    skipDuplicates?: boolean;
};
export type IncidentUpsertWithWhereUniqueWithoutReporterInput = {
    where: Prisma.IncidentWhereUniqueInput;
    update: Prisma.XOR<Prisma.IncidentUpdateWithoutReporterInput, Prisma.IncidentUncheckedUpdateWithoutReporterInput>;
    create: Prisma.XOR<Prisma.IncidentCreateWithoutReporterInput, Prisma.IncidentUncheckedCreateWithoutReporterInput>;
};
export type IncidentUpdateWithWhereUniqueWithoutReporterInput = {
    where: Prisma.IncidentWhereUniqueInput;
    data: Prisma.XOR<Prisma.IncidentUpdateWithoutReporterInput, Prisma.IncidentUncheckedUpdateWithoutReporterInput>;
};
export type IncidentUpdateManyWithWhereWithoutReporterInput = {
    where: Prisma.IncidentScalarWhereInput;
    data: Prisma.XOR<Prisma.IncidentUpdateManyMutationInput, Prisma.IncidentUncheckedUpdateManyWithoutReporterInput>;
};
export type IncidentCreateManyOrganizationInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.IncidentStatus;
    priority?: $Enums.IncidentPriority;
    reporterId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncidentUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reporter?: Prisma.UserUpdateOneRequiredWithoutReportedIncidentsNestedInput;
};
export type IncidentUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncidentUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncidentCreateManyReporterInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.IncidentStatus;
    priority?: $Enums.IncidentPriority;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IncidentUpdateWithoutReporterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutIncidentsNestedInput;
};
export type IncidentUncheckedUpdateWithoutReporterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncidentUncheckedUpdateManyWithoutReporterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus;
    priority?: Prisma.EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IncidentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    organizationId?: boolean;
    reporterId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    reporter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["incident"]>;
export type IncidentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    organizationId?: boolean;
    reporterId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    reporter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["incident"]>;
export type IncidentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    organizationId?: boolean;
    reporterId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    reporter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["incident"]>;
export type IncidentSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    organizationId?: boolean;
    reporterId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type IncidentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "organizationId" | "reporterId" | "createdAt" | "updatedAt", ExtArgs["result"]["incident"]>;
export type IncidentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    reporter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type IncidentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    reporter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    reporter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $IncidentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Incident";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        reporter: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        status: $Enums.IncidentStatus;
        priority: $Enums.IncidentPriority;
        organizationId: string;
        reporterId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["incident"]>;
    composites: {};
};
export type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IncidentPayload, S>;
export type IncidentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IncidentCountAggregateInputType | true;
};
export interface IncidentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Incident'];
        meta: {
            name: 'Incident';
        };
    };
    findUnique<T extends IncidentFindUniqueArgs>(args: Prisma.SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IncidentFindFirstArgs>(args?: Prisma.SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IncidentFindManyArgs>(args?: Prisma.SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IncidentCreateArgs>(args: Prisma.SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IncidentCreateManyArgs>(args?: Prisma.SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IncidentDeleteArgs>(args: Prisma.SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IncidentUpdateArgs>(args: Prisma.SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IncidentDeleteManyArgs>(args?: Prisma.SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IncidentUpdateManyArgs>(args: Prisma.SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IncidentUpsertArgs>(args: Prisma.SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma.Prisma__IncidentClient<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IncidentCountArgs>(args?: Prisma.Subset<T, IncidentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IncidentCountAggregateOutputType> : number>;
    aggregate<T extends IncidentAggregateArgs>(args: Prisma.Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>;
    groupBy<T extends IncidentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IncidentGroupByArgs['orderBy'];
    } : {
        orderBy?: IncidentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IncidentFieldRefs;
}
export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reporter<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IncidentFieldRefs {
    readonly id: Prisma.FieldRef<"Incident", 'String'>;
    readonly title: Prisma.FieldRef<"Incident", 'String'>;
    readonly description: Prisma.FieldRef<"Incident", 'String'>;
    readonly status: Prisma.FieldRef<"Incident", 'IncidentStatus'>;
    readonly priority: Prisma.FieldRef<"Incident", 'IncidentPriority'>;
    readonly organizationId: Prisma.FieldRef<"Incident", 'String'>;
    readonly reporterId: Prisma.FieldRef<"Incident", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Incident", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Incident", 'DateTime'>;
}
export type IncidentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where: Prisma.IncidentWhereUniqueInput;
};
export type IncidentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where: Prisma.IncidentWhereUniqueInput;
};
export type IncidentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where?: Prisma.IncidentWhereInput;
    orderBy?: Prisma.IncidentOrderByWithRelationInput | Prisma.IncidentOrderByWithRelationInput[];
    cursor?: Prisma.IncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncidentScalarFieldEnum | Prisma.IncidentScalarFieldEnum[];
};
export type IncidentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where?: Prisma.IncidentWhereInput;
    orderBy?: Prisma.IncidentOrderByWithRelationInput | Prisma.IncidentOrderByWithRelationInput[];
    cursor?: Prisma.IncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncidentScalarFieldEnum | Prisma.IncidentScalarFieldEnum[];
};
export type IncidentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where?: Prisma.IncidentWhereInput;
    orderBy?: Prisma.IncidentOrderByWithRelationInput | Prisma.IncidentOrderByWithRelationInput[];
    cursor?: Prisma.IncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncidentScalarFieldEnum | Prisma.IncidentScalarFieldEnum[];
};
export type IncidentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncidentCreateInput, Prisma.IncidentUncheckedCreateInput>;
};
export type IncidentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IncidentCreateManyInput | Prisma.IncidentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IncidentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    data: Prisma.IncidentCreateManyInput | Prisma.IncidentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IncidentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IncidentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncidentUpdateInput, Prisma.IncidentUncheckedUpdateInput>;
    where: Prisma.IncidentWhereUniqueInput;
};
export type IncidentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IncidentUpdateManyMutationInput, Prisma.IncidentUncheckedUpdateManyInput>;
    where?: Prisma.IncidentWhereInput;
    limit?: number;
};
export type IncidentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncidentUpdateManyMutationInput, Prisma.IncidentUncheckedUpdateManyInput>;
    where?: Prisma.IncidentWhereInput;
    limit?: number;
    include?: Prisma.IncidentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IncidentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where: Prisma.IncidentWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncidentCreateInput, Prisma.IncidentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IncidentUpdateInput, Prisma.IncidentUncheckedUpdateInput>;
};
export type IncidentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where: Prisma.IncidentWhereUniqueInput;
};
export type IncidentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncidentWhereInput;
    limit?: number;
};
export type IncidentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    include?: Prisma.IncidentInclude<ExtArgs> | null;
};
export {};

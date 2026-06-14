import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type EnumIncidentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | Prisma.EnumIncidentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentStatusFilter<$PrismaModel> | $Enums.IncidentStatus;
};
export type EnumIncidentPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentPriority | Prisma.EnumIncidentPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentPriority[] | Prisma.ListEnumIncidentPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentPriority[] | Prisma.ListEnumIncidentPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentPriorityFilter<$PrismaModel> | $Enums.IncidentPriority;
};
export type EnumIncidentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | Prisma.EnumIncidentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumIncidentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumIncidentStatusFilter<$PrismaModel>;
};
export type EnumIncidentPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentPriority | Prisma.EnumIncidentPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentPriority[] | Prisma.ListEnumIncidentPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentPriority[] | Prisma.ListEnumIncidentPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentPriorityWithAggregatesFilter<$PrismaModel> | $Enums.IncidentPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumIncidentPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumIncidentPriorityFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type NestedEnumIncidentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | Prisma.EnumIncidentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentStatusFilter<$PrismaModel> | $Enums.IncidentStatus;
};
export type NestedEnumIncidentPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentPriority | Prisma.EnumIncidentPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentPriority[] | Prisma.ListEnumIncidentPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentPriority[] | Prisma.ListEnumIncidentPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentPriorityFilter<$PrismaModel> | $Enums.IncidentPriority;
};
export type NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | Prisma.EnumIncidentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentStatus[] | Prisma.ListEnumIncidentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumIncidentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumIncidentStatusFilter<$PrismaModel>;
};
export type NestedEnumIncidentPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentPriority | Prisma.EnumIncidentPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.IncidentPriority[] | Prisma.ListEnumIncidentPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IncidentPriority[] | Prisma.ListEnumIncidentPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIncidentPriorityWithAggregatesFilter<$PrismaModel> | $Enums.IncidentPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumIncidentPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumIncidentPriorityFilter<$PrismaModel>;
};

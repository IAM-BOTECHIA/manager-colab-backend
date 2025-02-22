// enum e um tipo de dado que so existe em TS

/* ENUMS criam uma lista de valores com sentido semantico facil de ler e que sejam permitidos*/


export enum ITEM_CATEGORIES{
    ex="EXERCICIOS",
    tp="PRATICAS",
    pj="PROJETOS",
    fx="FIXACAO",
    sp="SNIPPETS",
    ch="CHALLANGES",
    tk="TASKS",
    rs="RESOURCES",
    vd="VIDEOS",
    im="IMAGES",
    ns="NOTES",
    nt="NOTEBOOK"
}

export enum STATUS_CATEGORIES{
    TODO=0,
    DOING=1,
    DONE=2,
    ARCHIVED=3
}

export enum USER_ROLES {
    ADMIN="ADMIN",
    OWNER="OWNER",
    BUYER="BUYER",
    NORMAL="REGISTERED",
    EMPLOYER="EMPLOYER",
    PUNISHED="PUNISHED"
}


/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/api/v6/alderspensjon/simulering': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Simuler alderspensjon
     * @description Lag en prognose for framtidig alderspensjon med støtte for AFP i offentlig sektor. Feltet 'epsHarInntektOver2G' brukes til å angi hvorvidt ektefelle/partner/samboer har inntekt over 2 ganger grunnbeløpet. Dersom simulering med de angitte parametre resulterer i avslag i vilkårsprøvingen, vil responsen inneholde alternative parametre som vil gi et innvilget simuleringsresultat
     */
    post: operations['simulerAlderspensjonV6']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/pensjonsavtaler': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Hent pensjonsavtaler (versjon 2)
     * @description Henter pensjonsavtalene til den innloggede/angitte brukeren. I request må verdi av 'maaneder' være 0..11.
     */
    post: operations['fetchAvtalerV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/tidligste-hel-uttaksalder': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Første mulige uttaksalder ved helt uttak
     * @description Finn første mulige uttaksalder for innlogget bruker ved helt (100 %) uttak. Feltet 'harEps' brukes til å angi om brukeren har ektefelle/partner/samboer eller ei
     */
    post: operations['finnTidligsteHelUttaksalderV1']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/tidligste-gradert-uttaksalder': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Første mulige uttaksalder ved gradert uttak
     * @description Finn første mulige uttaksalder for innlogget bruker ved gradert (20–80 %) uttak. Feltet 'harEps' brukes til å angi om brukeren har ektefelle/partner/samboer eller ei
     */
    post: operations['finnTidligsteGradertUttaksalderV1']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/encrypt': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Krypter tekst
     * @description Krypterer angitt tekst (typisk brukstilfelle er for fødselsnumre)
     */
    post: operations['encrypt']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/alderspensjon/anonym-simulering': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Simuler alderspensjon anonymt (ikke innlogget)
     * @description Lag en prognose for framtidig alderspensjon med støtte for AFP i offentlig sektor. Feltet 'epsHarInntektOver2G' brukes til å angi hvorvidt ektefelle/partner/samboer har inntekt over 2 ganger grunnbeløpet. Dersom simulering med de angitte parametre resulterer i avslag i vilkårsprøvingen, vil responsen inneholde alternative parametre som vil gi et innvilget simuleringsresultat
     */
    post: operations['simulerAnonymAlderspensjonV1']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/person': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Hent personinformasjon
     * @description Henter personinformasjon om den innloggede brukeren.
     */
    get: operations['personV2']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/ekskludert': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Om personen er ekskludert fra å bruke kalkulatoren
     * @description Eksludering kan skyldes medlemskap i Apotekerforeningen
     */
    get: operations['erEkskludertV2']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/vedtak/loepende-vedtak': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Har løpende vedtak
     * @description Hvorvidt den innloggede brukeren har løpende uføretrygd med uttaksgrad, alderspensjon med uttaksgrad, AFP i privat eller offentlig sektor
     */
    get: operations['hentLoependeVedtakV1']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/ufoeregrad': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Hente gjeldende uføregrad
     * @description Hente gjeldende uføregrad fra løpende vedtak om uføretrygd om det finnes
     */
    get: operations['hentUfoeregrad']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/tpo-medlemskap': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Hent medlemskap i offentlige tjenestepensjonsordninger
     * @description Henter både aktive og inaktive medlemskap til brukeren i offentlige tjenestepensjonsordninger
     */
    get: operations['hentMedlemskapITjenestepensjonsordninger']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/loepende-omstillingsstoenad-eller-gjenlevendeytelse': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Mottar omstillingsstønad eller gjenlevende ytelse
     * @description Hvorvidt den innloggede brukeren mottar omstillingsstønad eller gjenlevende ytelse
     */
    get: operations['mottarOmstillingsstoenadEllerGjenlevendeYtelse']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/land-liste': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Hent land-liste
     * @description Henter liste over land med navn og status som avtaleland. Denne tjenesten er åpen - krever ikke autentisering.
     */
    get: operations['landListe']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/ekskludert': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Om personen er ekskludert fra å bruke kalkulatoren
     * @description Eksludering kan skyldes løpende uføretrygd, gjenlevendeytelse eller medlemskap i Apotekerforeningen
     */
    get: operations['erEkskludertV1']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/ansatt-id': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Hent ansatt-ID
     * @description Henter informasjon som identifiserer den innloggede ansatte.
     */
    get: operations['ansattId']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/tpo-medlemskap': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Har offentlig tjenestepensjonsforhold
     * @description Hvorvidt den innloggede brukeren har offentlig tjenestepensjonsforhold
     */
    get: operations['harTjenestepensjonsforhold']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/status': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Sjekk status
     * @description Hent status for applikasjonens helsetilstand
     */
    get: operations['status']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/sak-status': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Har uføretrygd/gjenlevendeytelse
     * @description Hvorvidt den innloggede brukeren har løpende uføretrygd eller gjenlevendeytelse
     */
    get: operations['harRelevantSak']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/inntekt': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Siste pensjonsgivende inntekt
     * @description Henter den innloggede brukerens sist skattelignede pensjonsgivende inntekt
     */
    get: operations['sistePensjonsgivendeInntekt']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/feature/{name}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Hvorvidt en gitt funksjonsbryter er skrudd på
     * @description Hent status for en gitt funksjonsbryter (hvorvidt funksjonen er skrudd på)
     */
    get: operations['isEnabled']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    IngressSimuleringAlderV6: {
      /** Format: int32 */
      aar: number
      /** Format: int32 */
      maaneder: number
    }
    IngressSimuleringGradertUttakV6: {
      /** Format: int32 */
      grad: number
      uttaksalder: components['schemas']['IngressSimuleringAlderV6']
      /** Format: int32 */
      aarligInntektVsaPensjonBeloep?: number
    }
    IngressSimuleringHeltUttakV6: {
      uttaksalder: components['schemas']['IngressSimuleringAlderV6']
      aarligInntektVsaPensjon?: components['schemas']['IngressSimuleringInntektV6']
    }
    IngressSimuleringInntektV6: {
      /** Format: int32 */
      beloep: number
      sluttAlder: components['schemas']['IngressSimuleringAlderV6']
    }
    IngressSimuleringSpecV6: {
      /** @enum {string} */
      simuleringstype:
        | 'ALDERSPENSJON'
        | 'ALDERSPENSJON_MED_AFP_PRIVAT'
        | 'ALDERSPENSJON_MED_AFP_OFFENTLIG_LIVSVARIG'
      /** Format: date */
      foedselsdato: string
      epsHarInntektOver2G: boolean
      /** Format: int32 */
      aarligInntektFoerUttakBeloep?: number
      /** @enum {string} */
      sivilstand?:
        | 'UNKNOWN'
        | 'UOPPGITT'
        | 'UGIFT'
        | 'GIFT'
        | 'ENKE_ELLER_ENKEMANN'
        | 'SKILT'
        | 'SEPARERT'
        | 'REGISTRERT_PARTNER'
        | 'SEPARERT_PARTNER'
        | 'SKILT_PARTNER'
        | 'GJENLEVENDE_PARTNER'
        | 'SAMBOER'
      gradertUttak?: components['schemas']['IngressSimuleringGradertUttakV6']
      heltUttak: components['schemas']['IngressSimuleringHeltUttakV6']
      utenlandsperiodeListe?: components['schemas']['UtenlandsperiodeSpecV6'][]
    }
    UtenlandsperiodeSpecV6: {
      /** Format: date */
      fom: string
      /** Format: date */
      tom?: string
      landkode: string
      arbeidetUtenlands: boolean
    }
    AlderV6: {
      /** Format: int32 */
      aar: number
      /** Format: int32 */
      maaneder: number
    }
    AlderspensjonsberegningV6: {
      /** Format: int32 */
      alder: number
      /** Format: int32 */
      beloep: number
      /** Format: int32 */
      inntektspensjonBeloep?: number
      /** Format: int32 */
      garantipensjonBeloep?: number
      /** Format: double */
      delingstall?: number
      /** Format: int32 */
      pensjonBeholdningFoerUttakBeloep?: number
    }
    AlternativV6: {
      gradertUttaksalder?: components['schemas']['AlderV6']
      /** Format: int32 */
      uttaksgrad?: number
      heltUttaksalder: components['schemas']['AlderV6']
    }
    PensjonsberegningAfpOffentligV6: {
      /** Format: int32 */
      alder: number
      /** Format: int32 */
      beloep: number
    }
    PensjonsberegningV6: {
      /** Format: int32 */
      alder: number
      /** Format: int32 */
      beloep: number
    }
    SimuleringResultatV6: {
      alderspensjon: components['schemas']['AlderspensjonsberegningV6'][]
      afpPrivat?: components['schemas']['PensjonsberegningV6'][]
      afpOffentlig?: components['schemas']['PensjonsberegningAfpOffentligV6'][]
      vilkaarsproeving: components['schemas']['VilkaarsproevingV6']
      harForLiteTrygdetid?: boolean
      /** Format: int32 */
      trygdetid?: number
      opptjeningGrunnlagListe?: components['schemas']['SimulertOpptjeningGrunnlagV6'][]
    }
    SimulertOpptjeningGrunnlagV6: {
      /** Format: int32 */
      aar: number
      /** Format: int32 */
      pensjonsgivendeInntektBeloep: number
    }
    VilkaarsproevingV6: {
      vilkaarErOppfylt: boolean
      alternativ?: components['schemas']['AlternativV6']
    }
    PensjonsavtaleAlderSpecV2: {
      /** Format: int32 */
      aar: number
      /** Format: int32 */
      maaneder: number
    }
    PensjonsavtaleInntektSpecV2: {
      /** Format: int32 */
      beloep: number
      sluttAlder?: components['schemas']['PensjonsavtaleAlderSpecV2']
    }
    PensjonsavtaleOppholdSpecV2: {
      /** Format: date */
      fom: string
      /** Format: date */
      tom?: string
    }
    PensjonsavtaleSpecV2: {
      /** Format: int32 */
      aarligInntektFoerUttakBeloep: number
      uttaksperioder: components['schemas']['PensjonsavtaleUttaksperiodeSpecV2'][]
      harAfp?: boolean
      harEpsPensjon?: boolean
      harEpsPensjonsgivendeInntektOver2G?: boolean
      /** Format: int32 */
      antallAarIUtlandetEtter16?: number
      utenlandsperioder?: components['schemas']['PensjonsavtaleOppholdSpecV2'][]
      /** @enum {string} */
      sivilstand?:
        | 'UNKNOWN'
        | 'UOPPGITT'
        | 'UGIFT'
        | 'GIFT'
        | 'ENKE_ELLER_ENKEMANN'
        | 'SKILT'
        | 'SEPARERT'
        | 'REGISTRERT_PARTNER'
        | 'SEPARERT_PARTNER'
        | 'SKILT_PARTNER'
        | 'GJENLEVENDE_PARTNER'
        | 'SAMBOER'
    }
    PensjonsavtaleUttaksperiodeSpecV2: {
      startAlder: components['schemas']['PensjonsavtaleAlderSpecV2']
      /** Format: int32 */
      grad: number
      aarligInntektVsaPensjon?: components['schemas']['PensjonsavtaleInntektSpecV2']
    }
    Alder: {
      /** Format: int32 */
      aar: number
      /** Format: int32 */
      maaneder: number
    }
    PensjonsavtaleResultV2: {
      avtaler: components['schemas']['PensjonsavtaleV2'][]
      utilgjengeligeSelskap: components['schemas']['SelskapV2'][]
    }
    PensjonsavtaleV2: {
      produktbetegnelse: string
      /** @enum {string} */
      kategori: 'UNKNOWN' | 'INDIVIDUELL_ORDNING' | 'PRIVAT_TJENESTEPENSJON'
      /** Format: int32 */
      startAar: number
      /** Format: int32 */
      sluttAar?: number
      utbetalingsperioder: components['schemas']['UtbetalingsperiodeV2'][]
    }
    SelskapV2: {
      navn: string
      heltUtilgjengelig: boolean
    }
    UtbetalingsperiodeV2: {
      startAlder: components['schemas']['Alder']
      sluttAlder?: components['schemas']['Alder']
      /** Format: int32 */
      aarligUtbetaling: number
      /** Format: int32 */
      grad: number
    }
    IngressUttaksalderAlderV1: {
      /** Format: int32 */
      aar: number
      /** Format: int32 */
      maaneder: number
    }
    IngressUttaksalderInntektV1: {
      /** Format: int32 */
      beloep: number
      sluttAlder?: components['schemas']['IngressUttaksalderAlderV1']
    }
    IngressUttaksalderSpecForHeltUttakV1: {
      /** @enum {string} */
      simuleringstype?:
        | 'ALDERSPENSJON'
        | 'ALDERSPENSJON_MED_AFP_PRIVAT'
        | 'ALDERSPENSJON_MED_AFP_OFFENTLIG_LIVSVARIG'
      /** @enum {string} */
      sivilstand?:
        | 'UNKNOWN'
        | 'UOPPGITT'
        | 'UGIFT'
        | 'GIFT'
        | 'ENKE_ELLER_ENKEMANN'
        | 'SKILT'
        | 'SEPARERT'
        | 'REGISTRERT_PARTNER'
        | 'SEPARERT_PARTNER'
        | 'SKILT_PARTNER'
        | 'GJENLEVENDE_PARTNER'
        | 'SAMBOER'
      harEps?: boolean
      /** Format: int32 */
      aarligInntektFoerUttakBeloep?: number
      aarligInntektVsaPensjon?: components['schemas']['IngressUttaksalderInntektV1']
      utenlandsperiodeListe?: components['schemas']['UttaksalderUtenlandsperiodeSpecV1'][]
    }
    UttaksalderUtenlandsperiodeSpecV1: {
      /** Format: date */
      fom: string
      /** Format: date */
      tom?: string
      landkode: string
      arbeidetUtenlands: boolean
    }
    AlderDto: {
      /** Format: int32 */
      aar: number
      /** Format: int32 */
      maaneder: number
    }
    IngressUttaksalderGradertUttakV1: {
      /** Format: int32 */
      grad: number
      /** Format: int32 */
      aarligInntektVsaPensjonBeloep?: number
    }
    IngressUttaksalderHeltUttakV1: {
      uttaksalder: components['schemas']['IngressUttaksalderAlderV1']
      aarligInntektVsaPensjon?: components['schemas']['IngressUttaksalderInntektV1']
    }
    IngressUttaksalderSpecForGradertUttakV1: {
      /** @enum {string} */
      simuleringstype?:
        | 'ALDERSPENSJON'
        | 'ALDERSPENSJON_MED_AFP_PRIVAT'
        | 'ALDERSPENSJON_MED_AFP_OFFENTLIG_LIVSVARIG'
      /** @enum {string} */
      sivilstand?:
        | 'UNKNOWN'
        | 'UOPPGITT'
        | 'UGIFT'
        | 'GIFT'
        | 'ENKE_ELLER_ENKEMANN'
        | 'SKILT'
        | 'SEPARERT'
        | 'REGISTRERT_PARTNER'
        | 'SEPARERT_PARTNER'
        | 'SKILT_PARTNER'
        | 'GJENLEVENDE_PARTNER'
        | 'SAMBOER'
      harEps?: boolean
      /** Format: int32 */
      aarligInntektFoerUttakBeloep?: number
      gradertUttak: components['schemas']['IngressUttaksalderGradertUttakV1']
      heltUttak: components['schemas']['IngressUttaksalderHeltUttakV1']
      utenlandsperiodeListe?: components['schemas']['UttaksalderUtenlandsperiodeSpecV1'][]
    }
    AnonymSimuleringAlderV1: {
      /** Format: int32 */
      aar: number
      /** Format: int32 */
      maaneder: number
    }
    AnonymSimuleringGradertUttakV1: {
      /** Format: int32 */
      grad: number
      uttakAlder: components['schemas']['AnonymSimuleringAlderV1']
      /** Format: int32 */
      aarligInntektVsaPensjonBeloep?: number
    }
    AnonymSimuleringHeltUttakV1: {
      uttakAlder: components['schemas']['AnonymSimuleringAlderV1']
      aarligInntektVsaPensjon?: components['schemas']['AnonymSimuleringInntektV1']
    }
    AnonymSimuleringInntektV1: {
      /** Format: int32 */
      beloep: number
      sluttAlder?: components['schemas']['AnonymSimuleringAlderV1']
    }
    AnonymSimuleringSpecV1: {
      simuleringType?: string
      /** Format: int32 */
      foedselAar: number
      sivilstand?: string
      epsHarInntektOver2G?: boolean
      epsHarPensjon?: boolean
      /** Format: int32 */
      utenlandsAntallAar?: number
      /** Format: int32 */
      inntektOver1GAntallAar?: number
      /** Format: int32 */
      aarligInntektFoerUttakBeloep?: number
      gradertUttak?: components['schemas']['AnonymSimuleringGradertUttakV1']
      heltUttak: components['schemas']['AnonymSimuleringHeltUttakV1']
    }
    AnonymAlderV1: {
      /** Format: int32 */
      aar: number
      /** Format: int32 */
      maaneder: number
    }
    AnonymAlternativV1: {
      gradertUttaksalder?: components['schemas']['AnonymAlderV1']
      /** Format: int32 */
      uttaksgrad?: number
      heltUttaksalder: components['schemas']['AnonymAlderV1']
    }
    AnonymPensjonsberegningAfpOffentligV1: {
      /** Format: int32 */
      alder: number
      /** Format: int32 */
      beloep: number
    }
    AnonymPensjonsberegningV1: {
      /** Format: int32 */
      alder: number
      /** Format: int32 */
      beloep: number
    }
    AnonymSimuleringResultV1: {
      alderspensjon: components['schemas']['AnonymPensjonsberegningV1'][]
      afpPrivat?: components['schemas']['AnonymPensjonsberegningV1'][]
      afpOffentlig?: components['schemas']['AnonymPensjonsberegningAfpOffentligV1'][]
      vilkaarsproeving: components['schemas']['AnonymVilkaarsproevingV1']
    }
    AnonymVilkaarsproevingV1: {
      vilkaarErOppfylt: boolean
      alternativ?: components['schemas']['AnonymAlternativV1']
    }
    PersonV2: {
      navn: string
      /** Format: date */
      foedselsdato: string
      /** @enum {string} */
      sivilstand:
        | 'UNKNOWN'
        | 'UOPPGITT'
        | 'UGIFT'
        | 'GIFT'
        | 'ENKE_ELLER_ENKEMANN'
        | 'SKILT'
        | 'SEPARERT'
        | 'REGISTRERT_PARTNER'
        | 'SEPARERT_PARTNER'
        | 'SKILT_PARTNER'
        | 'GJENLEVENDE_PARTNER'
    }
    EkskluderingStatusV2: {
      ekskludert: boolean
      /** @enum {string} */
      aarsak: 'NONE' | 'ER_APOTEKER'
    }
    LoependeVedtakDetaljerV1: {
      loepende: boolean
      /** Format: int32 */
      grad: number
      /** Format: date */
      fom?: string
    }
    LoependeVedtakV1: {
      alderspensjon: components['schemas']['LoependeVedtakDetaljerV1']
      ufoeretrygd: components['schemas']['LoependeVedtakDetaljerV1']
      afpPrivat: components['schemas']['LoependeVedtakDetaljerV1']
      afpOffentlig: components['schemas']['LoependeVedtakDetaljerV1']
    }
    UfoeregradDto: {
      /** Format: int32 */
      ufoeregrad: number
    }
    MedlemskapITjenestepensjonsordningDto: {
      tpLeverandoerListe: string[]
    }
    BrukerHarLoependeOmstillingsstoenadEllerGjenlevendeYtelse: {
      harLoependeSak: boolean
    }
    LandInfo: {
      landkode: string
      kravOmArbeid?: boolean
      bokmaalNavn: string
      nynorskNavn: string
      engelskNavn: string
    }
    EkskluderingStatusV1: {
      ekskludert: boolean
      /** @enum {string} */
      aarsak:
        | 'NONE'
        | 'HAR_LOEPENDE_UFOERETRYGD'
        | 'HAR_GJENLEVENDEYTELSE'
        | 'ER_APOTEKER'
    }
    AnsattV1: {
      id: string
    }
    TjenestepensjonsforholdDto: {
      harTjenestepensjonsforhold: boolean
    }
    ApiStatusDto: {
      status: string
    }
    SakDto: {
      harUfoeretrygdEllerGjenlevendeytelse: boolean
    }
    InntektDto: {
      /** Format: int32 */
      beloep: number
      /** Format: int32 */
      aar: number
    }
    EnablementDto: {
      enabled: boolean
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  simulerAlderspensjonV6: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['IngressSimuleringSpecV6']
      }
    }
    responses: {
      /** @description Simulering utført */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['SimuleringResultatV6']
        }
      }
      /** @description Simulering kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  fetchAvtalerV2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['PensjonsavtaleSpecV2']
      }
    }
    responses: {
      /** @description Henting av pensjonsavtaler utført. I respons er verdi av 'maaneder' 0..11. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['PensjonsavtaleResultV2']
        }
      }
      /** @description Henting av pensjonsavtaler kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  finnTidligsteHelUttaksalderV1: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['IngressUttaksalderSpecForHeltUttakV1']
      }
    }
    responses: {
      /** @description Søk etter uttaksalder utført. I resultatet er verdi av 'maaneder' 0..11. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['AlderDto']
        }
      }
      /** @description Søk etter uttaksalder kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  finnTidligsteGradertUttaksalderV1: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['IngressUttaksalderSpecForGradertUttakV1']
      }
    }
    responses: {
      /** @description Søk etter uttaksalder utført. I resultatet er verdi av 'maaneder' 0..11. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['AlderDto']
        }
      }
      /** @description Søk etter uttaksalder kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  encrypt: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description Kryptering utført */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': string
        }
      }
      /** @description Kryptering kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  simulerAnonymAlderspensjonV1: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AnonymSimuleringSpecV1']
      }
    }
    responses: {
      /** @description Simulering utført */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['AnonymSimuleringResultV1']
        }
      }
      /** @description Simulering kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  personV2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Henting av personinformasjon utført. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['PersonV2']
        }
      }
      /** @description Personen ble ikke funnet. */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['PersonV2']
        }
      }
      /** @description Henting av personinformasjon kunne ikke utføres av tekniske årsaker. */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  erEkskludertV2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Sjekking av ekskludering utført */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['EkskluderingStatusV2']
        }
      }
      /** @description Sjekking av ekskludering kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  hentLoependeVedtakV1: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Henting av løpende vedtak utført */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['LoependeVedtakV1']
        }
      }
      /** @description Henting av løpende vedtak kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  hentUfoeregrad: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Henting av uføregrad utført */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['UfoeregradDto']
        }
      }
      /** @description henting av uføregrad kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  hentMedlemskapITjenestepensjonsordninger: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['MedlemskapITjenestepensjonsordningDto']
        }
      }
    }
  }
  mottarOmstillingsstoenadEllerGjenlevendeYtelse: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Henting av omstillingsstønad eller gjenlevende ytelse utført. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['BrukerHarLoependeOmstillingsstoenadEllerGjenlevendeYtelse']
        }
      }
      /** @description Henting av omstillingsstønad eller gjenlevende ytelse kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  landListe: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Henting av land-liste utført. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['LandInfo'][]
        }
      }
      /** @description Henting av land-liste kunne ikke utføres av tekniske årsaker. */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  erEkskludertV1: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Sjekking av ekskludering utført */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['EkskluderingStatusV1']
        }
      }
      /** @description Sjekking av ekskludering kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  ansattId: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Henting av ansatt-ID utført. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['AnsattV1']
        }
      }
      /** @description Henting av ansatt-ID kunne ikke utføres av tekniske årsaker. */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  harTjenestepensjonsforhold: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['TjenestepensjonsforholdDto']
        }
      }
    }
  }
  status: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['ApiStatusDto']
        }
      }
    }
  }
  harRelevantSak: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Sjekking av saker utført */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['SakDto']
        }
      }
      /** @description Sjekking av saker kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  sistePensjonsgivendeInntekt: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Henting av inntekt utført. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['InntektDto']
        }
      }
      /** @description Henting av inntekt kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
  isEnabled: {
    parameters: {
      query?: never
      header?: never
      path: {
        name: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Sjekking av funksjonsbryter-status */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['EnablementDto']
        }
      }
      /** @description Sjekking av funksjonsbryter-status kunne ikke utføres av tekniske årsaker */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': unknown
        }
      }
    }
  }
}

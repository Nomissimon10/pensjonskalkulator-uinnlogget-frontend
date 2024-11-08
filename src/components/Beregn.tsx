import { useContext, useMemo } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { FormContext } from '@/contexts/context'
import { getChartOptions } from './utils/chartUtils'
import { Box } from '@navikt/ds-react'
import ResultTable from './ResultTable'
import { FormValueResult } from '@/common'
import ResponseWarning from './ResponseWarning'

interface BeregnResource {
  resource: { read(): FormValueResult | undefined }
}

const Beregn: React.FC<BeregnResource> = ({ resource }) => {
  const { state } = useContext(FormContext)
  const beregnResult = resource.read()

  const chartOptions = useMemo(() => {
    const heltUttakAlder = state.heltUttak.uttakAlder.aar
    const inntektVsaHelPensjonBeloep =
      state.heltUttak.aarligInntektVsaPensjon?.beloep ?? 0
    const inntektVsaHelPensjonSluttalder =
      state.heltUttak.aarligInntektVsaPensjon?.sluttAlder?.aar ?? 0

    return getChartOptions(
      heltUttakAlder,
      inntektVsaHelPensjonSluttalder,
      inntektVsaHelPensjonBeloep,
      beregnResult
    )
  }, [state, beregnResult])

  const Response = () => {
    if (!beregnResult) return
    if (!beregnResult.vilkaarsproeving.vilkaarErOppfylt)
      return <ResponseWarning />

    return (
      <>
        <h1>Resultat</h1>
        <ResultTable
          alderspensjon={beregnResult.alderspensjon}
          afpPrivat={beregnResult.afpPrivat}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps={{ 'data-testid': 'highcharts-react' }}
        />
      </>
    )
  }

  return (
    <div>
      <Box
        maxWidth={'70rem'}
        width={'100%'}
        marginInline={'auto'}
        borderColor="border-default"
        padding={'4'}
        borderRadius={'large'}
        role="region"
      >
        <Response />
      </Box>
    </div>
  )
}

export default Beregn

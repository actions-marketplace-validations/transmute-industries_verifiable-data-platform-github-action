import * as core from '@actions/core';
import { Api } from '../../vdp'; 
import { axiosConfig } from '../../config';
import { generateHeaders } from '../../utils';

// The support for this end-point is being depreciated since we no longer support
// BBS/BLS12381 signatures, see https://github.com/w3c-ccg/ldp-bbs2020/issues/62
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deriveCredential = async({ verifiableCredential, frame, options }: any) => {
    const api = new Api({ ...axiosConfig });
    const headers = generateHeaders()
    const { data: response } = await api.credentials.deriveCredential( { verifiableCredential: JSON.parse(verifiableCredential), frame: JSON.parse(frame), options: JSON.parse(options)  }, { headers })
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
}
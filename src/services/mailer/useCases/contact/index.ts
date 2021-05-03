import { DomainMailProvider } from '../../providers/implementation/DomainMailProvider'
import { CreateRequestController } from './CreateRequestController'
import { CreateRequestUseCase } from './CreateRequestUseCase'

const mailtrapMailProvider = new DomainMailProvider()

const createRequestUseCase = new CreateRequestUseCase(
    mailtrapMailProvider
)

const createRequestController = new CreateRequestController(createRequestUseCase)

export { createRequestUseCase, createRequestController}

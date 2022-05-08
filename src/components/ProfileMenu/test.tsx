import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<ProfileMenu />)

    // verificar os 4 links existentes
    expect(screen.getByText(/my profile/i).closest('a')).toHaveAttribute(
      'href',
      '/profile/me'
    )
  })
})

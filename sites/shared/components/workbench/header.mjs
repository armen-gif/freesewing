// Hooks
import { useContext, useState } from 'react'
import { useTranslation } from 'next-i18next'
// Context
import { ModalContext } from 'shared/context/modal-context.mjs'
// Components
import {
  BeakerIcon,
  BriefcaseIcon,
  CodeIcon,
  CutIcon,
  HelpIcon,
  HomeIcon,
  MenuIcon,
  OptionsIcon,
  PrintIcon,
  UploadIcon,
  RightIcon,
  LeftIcon,
  DocsIcon,
  SearchIcon,
} from 'shared/components/icons.mjs'
import { Ribbon } from 'shared/components/ribbon.mjs'
import { ModalMenu } from 'site/components/navigation/modal-menu.mjs'
import Link from 'next/link'

export const ns = ['workbench', 'sections']

export const NavButton = ({
  href,
  label,
  children,
  onClick = false,
  active = false,
  extraClasses = 'bg-neutral text-neutral-content hover:bg-secondary hover:text-secondary-content',
}) => {
  const className = `w-full flex flex-row items-center px-4 py-2 ${extraClasses} ${
    active ? 'text-secondary' : ''
  }`
  const span = <span className="font-bold block grow text-left">{label}</span>

  return onClick ? (
    <button {...{ onClick, className }} title={label}>
      {span}
      {children}
    </button>
  ) : (
    <Link {...{ href, className }} title={label}>
      {span}
      {children}
    </Link>
  )
}

const NavIcons = ({ setModal, setView, setDense, dense, view }) => {
  const { t } = useTranslation(['header'])
  const iconSize = 'h-6 w-6 grow-0'

  return (
    <>
      <NavButton
        onClick={() => setDense(!dense)}
        label={t('workbench:collapse')}
        extraClasses="text-success bg-neutral hover:bg-success hover:text-neutral"
      >
        {dense ? (
          <RightIcon className={`${iconSize} animate-bounce-right`} stroke={4} />
        ) : (
          <LeftIcon className={`${iconSize} animate-bounce-right`} stroke={4} />
        )}
      </NavButton>
      <NavButton
        onClick={() => setView('draft')}
        label={t('workbench:draft')}
        active={view === 'draft'}
      >
        <OptionsIcon className={iconSize} />
      </NavButton>
      <NavButton
        onClick={() => setView('test')}
        label={t('workbench:test')}
        active={view === 'test'}
      >
        <BeakerIcon className={iconSize} />
      </NavButton>
      <NavButton
        onClick={() => setView('print')}
        label={t('workbench:printLayout')}
        active={view === 'print'}
      >
        <PrintIcon className={iconSize} />
      </NavButton>
      <NavButton
        onClick={() => setView('cut')}
        label={t('workbench:cutLayout')}
        active={view === 'cut'}
      >
        <CutIcon className={iconSize} />
      </NavButton>
      <NavButton
        onClick={() => setView('save')}
        label={t('workbench:save')}
        active={view === 'save'}
      >
        <UploadIcon className={iconSize} />
      </NavButton>
      <NavButton
        onClick={() => setView('export')}
        label={t('workbench:export')}
        active={view === 'export'}
      >
        <BriefcaseIcon className={iconSize} />
      </NavButton>
      <NavButton
        onClick={() => setView('edit')}
        label={t('workbench:edit')}
        active={view === 'edit'}
      >
        <CodeIcon className={iconSize} />
      </NavButton>
      <NavButton
        onClick={() => setView('logs')}
        label={t('workbench:logs')}
        active={view === 'logs'}
      >
        <DocsIcon className={iconSize} />
      </NavButton>
      <NavButton
        onClick={() => setView('inspect')}
        label={t('workbench:inspector')}
        active={view === 'inspect'}
      >
        <SearchIcon className={iconSize} />
      </NavButton>
      <NavButton label={t('workbench:help')} href="/docs/site/draft">
        <HelpIcon className={iconSize} />
      </NavButton>
    </>
  )
}

export const WorkbenchHeader = ({ view, setView, update }) => {
  const { setModal } = useContext(ModalContext)
  const [dense, setDense] = useState(true)

  return (
    <header
      className={`
      hidden lg:block lg:fixed lg:top-0 lg:left-0
      bg-neutral
      w-64 h-screen
      z-10
      transition-transform
      drop-shadow-xl
      pt-28
      ${dense ? '-translate-x-52' : ''}
    `}
    >
      <div className="hidden lg:flex lg:flex-col lg:justify-between items-center w-full">
        <NavIcons {...{ setModal, setView, setDense, dense, view }} />
      </div>
    </header>
  )
}

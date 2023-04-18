import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

export default function CenteredAccordion({title, items}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">{title}</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {items.map((item) => (
              <Disclosure as="div" key={item.title} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        {item.title}
                        <span className="ml-6 flex h-7 items-center">
                          {item.elem ? 
                          (open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ))
                          : null}


                        </span>
                      </Disclosure.Button>
                    </dt>
                    <div className="mt-2 pr-12">
                    <Disclosure.Panel as="dd" className="">
                      {/* <div className="text-base leading-7 text-gray-600">{post.answer}</div> */}
                      {item.elem}
                    </Disclosure.Panel>
                    </div>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}



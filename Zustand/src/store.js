import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

const store = (set, get) => (
    {
        count: 1,
        name: 'anshu',
        increment: () => {
            set((state) => (
                {
                    count: state.count + 1
                }
            ))
        },
        capatalizeName: () => {
            const { name } = get();
            set({
                name: name.charAt(0).toUpperCase() + name.slice(1)
            })
        }
    }
)


const useMystore = create(
    devtools(
        persist(store, {
            name: 'mystore',
            storage: createJSONStorage(() => sessionStorage)
        }
        )
    ) 
)

export default useMystore;
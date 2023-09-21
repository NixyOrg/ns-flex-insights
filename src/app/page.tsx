'use client';

import {PhotoIcon, TrashIcon} from '@heroicons/react/24/solid';
import {type ChangeEventHandler, useState} from 'react';

const Home: React.FC<Record<string, never>> = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (!event.target.files) {
            return;
        }
        setFiles([...event.target.files]);
    };

    return (
        <div className="space-y-12">
            <form>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="file-upload">
                            Travel history
                        </label>
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            htmlFor="file-upload"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                className="sr-only"
                                                name="file-upload"
                                                type="file"
                                                accept=".csv"
                                                multiple
                                                onChange={handleChange}
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">CSV up to 1 MB</p>
                                </div>
                            </div>
                            <div className="mt-2 flex justify-center rounded-lg border border-gray-900/25">
                                {/* TODO: https://tailwindui.com/components/application-ui/lists/stacked-lists#component-f0f183415de745e81fa742d6e1df9e04 */}
                                {/* TODO: merge that with div above */}
                                <ul role="list" className="divide-y divide-gray-100">
                                    {files.map((file) => (
                                        <li
                                            key={file.name}
                                            className="flex items-center justify-between gap-x-6 px-5 py-5"
                                        >
                                            <div>{file.name}</div>
                                            <div>
                                                <TrashIcon className="h-4 w-4 cursor-pointer text-gray-300 hover:text-gray-500" />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Home;

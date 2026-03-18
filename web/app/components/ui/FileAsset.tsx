import { urlForFile } from "@/app/sanity-api/sanity-utils";
import { SanityFileAssetReference } from "@/app/types/sanity.types";

type Props = {
  fileAsset?: SanityFileAssetReference;
  className?: string;
  children?: React.ReactNode | ((url: string) => React.ReactNode);
};

const FileAsset = ({ fileAsset, className, children }: Props) => {
  if (!fileAsset) {
    return null;
  }

  // CORRECT: Use the helper function instead of trying to access .url directly
  const fileUrl = urlForFile(fileAsset);

  return (
    <div className={className}>
      {/* Use the fileUrl for your file needs */}
      {typeof children === "function" ? children(fileUrl) : children}
    </div>
  );
};

export default FileAsset;

import * as React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { myLoader } from "@/utils/functions";
import Link from 'next/link';
import  Button  from './Button';
import { toast } from 'react-toastify';
import clsx from 'clsx';

function Card({ poster, title, content, author, date, id, layout="horizontal", deleteFunction, revalidateFunction, deleteSuccessMessage="Başarıyla silindi" }) {
  return (
    <div className="container mt-4">
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className= {clsx("diğer classlar", layout==="horizontal" && "col-12" )}>
            <Image
              src={"/noImage.png"}
              height={50}
              width={150}
              className="rounded card-img-top img-fluid w-100 h-100"
              alt={`${title} Adlı Resim`}
              loader={() => myLoader(poster)}
              priority
            />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column h-100 ">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{content}</p>
              <p className="card-text justify-self-end">
                <small className="text-body-secondary">
                  Yazar: {author} |{" "}
                  {date && new Date(date).toLocaleDateString()}
                </small>
              </p>
            </div>
          </div>
          <div className="card-footer border-top-0 bg-transparent ">
              <Link href={`blog/${id}`} className="btn btn-primary">
                Daha fazlası
              </Link>
              <Button
                className="btn btn-danger ms-2"
                onClick={async () => {
                  const result = await deleteFunction(id);
                  if (result) {
                    await revalidateFunction();
                    toast.success(deleteSuccessMessage);
                  }
                }}
              >
                Sil
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
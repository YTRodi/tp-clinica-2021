import { BuilderTemplate } from 'src/app/shared/entities/builder/builderTemplate';
import { ICommonEntity } from 'src/app/shared/interfaces/common/common.interface';
import { Maybe } from 'src/app/shared/types';

export interface IPhoto extends ICommonEntity {
  url: string;
}

export class Photo extends BuilderTemplate<IPhoto> {
  protected initialize(): IPhoto {
    return {
      url: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };
  }

  setUrl(url: string): Photo {
    this._model.url = url;
    return this;
  }

  setUpdatedAt(updatedAtDate: Date): Photo {
    this._model.updatedAt = updatedAtDate;
    return this;
  }

  setDeletedAt(deletedAtDate: Maybe<Date>): Photo {
    this._model.deletedAt = deletedAtDate;
    return this;
  }
}
